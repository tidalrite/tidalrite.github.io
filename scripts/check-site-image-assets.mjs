import { access, readFile, readdir } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const dist = resolve(root, "dist");
let checked = 0;
const missing = new Set();
async function scan(directory) {
	for (const entry of await readdir(directory, { withFileTypes: true })) {
		const file = join(directory, entry.name);
		if (entry.isDirectory()) { await scan(file); continue; }
		if (!entry.name.endsWith(".html")) continue;
		const html = await readFile(file, "utf8");
		for (const [, value] of html.matchAll(/(?:src|srcset)="([^"<>]+)"/g)) {
			for (const candidate of value.split(",")) {
				const path = candidate.trim().split(/\s+/)[0].split(/[?#]/)[0];
				if (!/^\/(?:_astro|assets|pio)\//.test(path)) continue;
				checked += 1;
				try { await access(join(dist, decodeURIComponent(path))); } catch { missing.add(path); }
			}
		}
		if (file === join(dist, "anime/index.html") && /(?:src|srcset)="https?:\/\/(?:s4\.anilist\.co|media\.kitsu\.app)/.test(html)) {
			throw new Error("Anime page must serve cached local posters, not third-party image URLs.");
		}
	}
}
await scan(dist);
if (missing.size) throw new Error(`Missing emitted image assets:\n${[...missing].join("\n")}`);
const manifest = JSON.parse(await readFile(join(root, "src/data/anime-local-covers.json"), "utf8"));
const catalogue = await readFile(join(root, "src/data/anime.ts"), "utf8");
for (const [, source] of catalogue.matchAll(/"cover":\s*"(https?:[^"]+)"/g)) {
	if (!manifest[source]) throw new Error(`Anime cover not cached: ${source}`);
}
console.log(`Verified ${checked} emitted local image references and all cached anime posters.`);
