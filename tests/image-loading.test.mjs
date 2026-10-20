import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const bannerSource = await readFile(
	new URL("../src/components/layout/Banner.astro", import.meta.url),
	"utf8",
);
const wallpaperSource = await readFile(
	new URL("../src/components/misc/FullscreenWallpaper.astro", import.meta.url),
	"utf8",
);
const wallpaperConfigSource = await readFile(
	new URL("../src/config/backgroundWallpaper.ts", import.meta.url),
	"utf8",
);
const siteConfigSource = await readFile(
	new URL("../src/config/siteConfig.ts", import.meta.url),
	"utf8",
);
const imageSource = await readFile(
	new URL("../src/components/atoms/Image/Image.astro", import.meta.url),
	"utf8",
);
const viewportImageSource = await readFile(
	new URL("../src/components/atoms/Image/ViewportImage.astro", import.meta.url),
	"utf8",
);
const imageSourceUtils = await readFile(
	new URL("../src/utils/image-source-utils.ts", import.meta.url),
	"utf8",
);
const musicConstants = await readFile(
	new URL(
		"../src/components/widgets/music-player/constants.ts",
		import.meta.url,
	),
	"utf8",
);
const musicCoverSource = await readFile(
	new URL(
		"../src/components/widgets/music-player/atoms/CoverImage.svelte",
		import.meta.url,
	),
	"utf8",
);

describe("Default image loading boundary", () => {
	it("uses media-qualified responsive sources for the first banner", () => {
		assert.match(bannerSource, /ViewportImage/);
		assert.match(bannerSource, /media="\(max-width: 767px\)"/);
		assert.match(bannerSource, /media="\(min-width: 768px\)"/);
		assert.match(bannerSource, /loading="lazy"[\s\S]*fetchpriority="low"/);
	});

	it("keeps inactive wallpaper requests low priority", () => {
		assert.match(wallpaperSource, /loading="lazy"/);
		assert.match(wallpaperSource, /fetchpriority="low"/);
		assert.doesNotMatch(wallpaperSource, /loading="eager"/);
		assert.doesNotMatch(wallpaperSource, /fetchpriority="high"/);
	});

	it("allows mirrored public assets to enter the Astro image pipeline", () => {
		assert.match(imageSource, /resolveImageMetadata/);
		assert.match(imageSource, /img && usePicture/);
		assert.match(
			imageSourceUtils,
			/if \(isRemoteImageSource\(src\)\) return src/,
		);
	});

	it("passes protocol-relative images through and emits the JPEG MIME type", () => {
		assert.match(imageSource, /const isRemote = isRemoteImageSource\(src\)/);
		assert.match(
			imageSource,
			/const isPublic = src\.startsWith\("\/"\) && !isRemote/,
		);
		assert.match(imageSource, /src={fullSrc}/);
		assert.doesNotMatch(imageSource, /url-utils/);
		assert.match(viewportImageSource, /format === "jpg" \? "jpeg" : format/);
		assert.match(
			viewportImageSource,
			/type={getImageMimeType\(source\.format\)}/,
		);
	});

	it("ships player-sized local music covers while leaving remote covers dynamic", async () => {
		assert.equal((musicConstants.match(/\.webp\?url/g) ?? []).length, 7);
		assert.match(musicConstants, /cover: childrenOfTheCityCover/);
		assert.doesNotMatch(musicCoverSource, /fetchpriority="high"/);

		for (const name of [
			"children-of-the-city",
			"hero",
			"in-hell-we-live-lament",
			"kaiju",
			"saikai",
			"through-patches-of-violet",
			"tian-tian",
		]) {
			const path = new URL(
				`../src/assets/music/cover/${name}.webp`,
				import.meta.url,
			);
			const metadata = await sharp(fileURLToPath(path)).metadata();
			assert.ok((metadata.width ?? Number.POSITIVE_INFINITY) <= 192);
			assert.ok((metadata.height ?? Number.POSITIVE_INFINITY) <= 192);
		}
	});

	it("serves every saved anime poster from a validated local WebP", async () => {
		const manifest = JSON.parse(
			await readFile(
				new URL("../src/data/anime-local-covers.json", import.meta.url),
				"utf8",
			),
		);
		const animeSource = await readFile(
			new URL("../src/data/anime.ts", import.meta.url),
			"utf8",
		);
		const covers = [...animeSource.matchAll(/"cover":\s*"([^"]+)"/g)].map(
			(match) => match[1],
		);
		assert.equal(covers.length, 107);
		for (const source of new Set(covers)) {
			const local = manifest[source];
			assert.match(local ?? "", /^\/assets\/anime\/covers\/[a-f0-9]+\.webp$/);
			const bytes = await readFile(
				new URL(`../public${local}`, import.meta.url),
			);
			const metadata = await sharp(bytes).metadata();
			assert.equal(metadata.format, "webp");
			assert.ok(metadata.width > 0 && metadata.width <= 600);
			assert.ok(bytes.length < 200_000);
		}
	});

	it("keeps all active banners optimized, mirrored and publicly addressable", async () => {
		const urls = [
			...siteConfigSource.matchAll(
				/"(\/assets\/desktop-banner\/tidalrite\/[^"\s]+)"/g,
			),
		].map((match) => match[1]);
		assert.equal(new Set(urls).size, 35);
		assert.ok(!urls.some((url) => /\/21\./.test(url)));
		for (const url of new Set(urls)) {
			assert.ok(url.endsWith(".webp"));
			const original = await readFile(
				new URL(`../public${url}`, import.meta.url),
			);
			const mirror = await readFile(
				new URL(`../src/assets/public${url}`, import.meta.url),
			);
			assert.deepEqual(original, mirror);
		}
	});

	it("keeps existing default-image mirrors synchronized with public files", async () => {
		const activeConfigSource = `${siteConfigSource}\n${wallpaperConfigSource}`;
		for (const group of ["desktop-banner", "mobile-banner"]) {
			for (let index = 1; index <= 4; index += 1) {
				const relative = `assets/${group}/${index}.webp`;
				let publicFile;
				try {
					publicFile = await readFile(
						new URL(`../public/${relative}`, import.meta.url),
					);
				} catch (error) {
					if (error?.code !== "ENOENT") throw error;
					assert.doesNotMatch(activeConfigSource, new RegExp(relative));
					continue;
				}
				const mirroredFile = await readFile(
					new URL(`../src/assets/public/${relative}`, import.meta.url),
				);
				assert.deepEqual(
					mirroredFile,
					publicFile,
					`${relative} mirror drifted`,
				);
			}
		}
	});
});
