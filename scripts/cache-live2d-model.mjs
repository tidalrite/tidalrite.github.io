import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import http from "node:http";
import path from "node:path";

const root = process.cwd();
const destination = path.join(root, "public/pio/models/rem");
const proxy = "http://127.0.0.1:35281";
const controllerUrl = "http://127.0.0.1:35282/proxies/SITE-DOWNLOAD";
const requiredProxyNode = "🇯🇵 日本A05 | 下载专用 | x0.01";
const upstream =
	"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models@48e4c734e1bbc09df9b77a1c50d1021b23043d6e/live2d_evrstr/rem/";
const entryFile = "model.json";
const sourceUrl = `${upstream}${entryFile}`;
const allowedFilePattern = /\.(?:moc3?|png|webp|jpe?g|json|mtn|exp3|wav|mp3|ogg)$/i;

function getControllerState() {
	return new Promise((resolve, reject) => {
		const request = http.get(controllerUrl, { timeout: 5000 }, (response) => {
			let body = "";
			response.setEncoding("utf8");
			response.on("data", (chunk) => (body += chunk));
			response.on("end", () => {
				try {
					resolve(JSON.parse(body));
				} catch (error) {
					reject(error);
				}
			});
		});
		request.on("error", reject);
		request.on("timeout", () =>
			request.destroy(new Error("Proxy controller timed out")),
		);
	});
}

function validateRelativeAsset(reference) {
	if (typeof reference !== "string" || !allowedFilePattern.test(reference)) return null;
	if (reference.includes("\\") || reference.includes(":") || reference.startsWith("/")) {
		throw new Error(`Refusing non-relative model resource: ${reference}`);
	}
	const normalized = path.posix.normalize(reference);
	if (normalized === ".." || normalized.startsWith("../")) {
		throw new Error(`Refusing model resource outside the model directory: ${reference}`);
	}
	return normalized;
}

function collectAssetReferences(value, references = new Set()) {
	if (Array.isArray(value)) {
		for (const item of value) collectAssetReferences(item, references);
	} else if (value && typeof value === "object") {
		for (const item of Object.values(value)) collectAssetReferences(item, references);
	} else if (typeof value === "string") {
		const normalized = validateRelativeAsset(value);
		if (normalized) references.add(normalized);
	}
	return references;
}

function fetchThroughApprovedProxy(url, outputPath) {
	execFileSync(
		"curl",
		[
			"--proxy",
			proxy,
			"--noproxy",
			"",
			"--fail",
			"--location",
			"--silent",
			"--show-error",
			"--max-time",
			"120",
			"--output",
			outputPath,
			url,
		],
		{ stdio: "inherit" },
	);
}

const controllerState = await getControllerState();
if (
	!controllerState.alive ||
	controllerState.name !== "SITE-DOWNLOAD" ||
	controllerState.now !== requiredProxyNode
) {
	throw new Error(
		`Authorized download node is not active; refusing download. Current node: ${controllerState.now ?? "unknown"}`,
	);
}

await fs.mkdir(destination, { recursive: true });
const pending = [entryFile];
const downloaded = new Set();
const totalBytes = { value: 0 };

while (pending.length > 0) {
	const relativePath = pending.shift();
	if (downloaded.has(relativePath)) continue;
	const outputPath = path.join(destination, ...relativePath.split("/"));
	await fs.mkdir(path.dirname(outputPath), { recursive: true });
	fetchThroughApprovedProxy(`${upstream}${relativePath.split("/").map(encodeURIComponent).join("/")}`, outputPath);
	const bytes = await fs.readFile(outputPath);
	downloaded.add(relativePath);
	totalBytes.value += bytes.length;

	if (relativePath.toLowerCase().endsWith(".json")) {
		let parsed;
		try {
			parsed = JSON.parse(bytes.toString("utf8"));
		} catch (error) {
			throw new Error(
				`Invalid model JSON at ${relativePath}: ${error.message}`,
			);
		}
		for (const reference of collectAssetReferences(parsed)) {
			if (!downloaded.has(reference) && !pending.includes(reference)) pending.push(reference);
		}
	}
}

const manifest = {
	upstream: "https://github.com/evrstr/live2d-widget-models",
	commit: "48e4c734e1bbc09df9b77a1c50d1021b23043d6e",
	entry: entryFile,
	sourceUrl,
	license: "No license is declared in the upstream GitHub repository metadata.",
	files: [],
};
for (const relativePath of [...downloaded].sort()) {
	const bytes = await fs.readFile(path.join(destination, ...relativePath.split("/")));
	manifest.files.push({
		path: relativePath,
		bytes: bytes.length,
		sha256: crypto.createHash("sha256").update(bytes).digest("hex"),
	});
}
await fs.writeFile(path.join(destination, "source.json"), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Cached ${downloaded.size} referenced model files (${totalBytes.value} bytes) via ${requiredProxyNode}.`);
