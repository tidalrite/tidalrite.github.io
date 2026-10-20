// Explicit, resumable maintenance command; builds never depend on a remote image CDN.
// Verify the provider/node/multiplier before running, then pass the dedicated proxy.
import { createHash } from "node:crypto";
import { execFile } from "node:child_process";
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { promisify } from "node:util";
import sharp from "sharp";
import animeList from "../src/data/anime.ts";

const run = promisify(execFile);
const root = new URL("../", import.meta.url);
const manifestFile = new URL("src/data/anime-local-covers.json", root);
const proxy = process.env.COVER_DOWNLOAD_PROXY;
if (!proxy) throw new Error("Set COVER_DOWNLOAD_PROXY to a verified low-cost, dedicated proxy.");
const controller = process.env.COVER_PROXY_CONTROLLER || "http://127.0.0.1:35282/proxies/SITE-DOWNLOAD";
const expectedNode = process.env.COVER_PROXY_NODE || "🇯🇵 日本A05 | 下载专用 | x0.01";
const state = await (await fetch(controller, { signal: AbortSignal.timeout(5000) })).json();
if (state.name !== "SITE-DOWNLOAD" || state.now !== expectedNode || !/下载专用.*x0\.01/.test(state.now)) {
	throw new Error("Verified dedicated x0.01 node is not selected; refusing download.");
}
const directory = new URL("public/assets/anime/covers/", root);
await mkdir(directory, { recursive: true });
let manifest = {};
try { manifest = JSON.parse(await readFile(manifestFile, "utf8")); } catch (e) {
	if (e.code !== "ENOENT") throw e;
}
const urls = [...new Set(animeList.map((anime) => anime.cover))];
const failed = [];
let downloaded = 0;
let totalBytes = 0;
async function cache(url) {
	const id = createHash("sha256").update(url).digest("hex").slice(0, 16);
	const relative = `/assets/anime/covers/${id}.webp`;
	const output = new URL(`public${relative}`, root);
	try {
		await access(output);
		await sharp(await readFile(output)).metadata();
		manifest[url] = relative;
		return;
	} catch {}
	try {
		const { stdout } = await run("curl", ["--proxy", proxy, "--noproxy", "", "--fail", "--location", "--silent", "--show-error", "--connect-timeout", "10", "--max-time", "35", "--retry", "1", "--max-filesize", "5242880", url], { encoding: "buffer", maxBuffer: 6 * 1024 * 1024 });
		const image = await sharp(stdout).rotate().resize({ width: 600, height: 900, fit: "inside", withoutEnlargement: true }).webp({ quality: 78 }).toBuffer();
		await writeFile(output, image);
		manifest[url] = relative;
		totalBytes += image.length;
		downloaded += 1;
		console.log(`${Object.keys(manifest).length}/${urls.length} cached ${id} (${image.length} bytes)`);
	} catch (error) {
		failed.push(url);
		console.error(`FAILED ${url}: ${error.message.slice(0, 180)}`);
	}
}
// Small bounded batch sizes avoid hammering the source or flooding the connection.
for (let i = 0; i < urls.length; i += 4) {
	await Promise.all(urls.slice(i, i + 4).map(cache));
	await writeFile(manifestFile, `${JSON.stringify(Object.fromEntries(Object.entries(manifest).sort()), null, 2)}\n`);
}
console.log(JSON.stringify({ downloaded, totalBytes, cached: Object.keys(manifest).length, failed }, null, 2));
if (failed.length) process.exitCode = 1;
