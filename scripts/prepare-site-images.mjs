import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const bannerDirectory = "public/assets/desktop-banner/tidalrite";
const bannerMirrorDirectory = "src/assets/public/assets/desktop-banner/tidalrite";
const bannerSources = [
	"5.jpg",
	"10.jpg",
	"11.jpg",
	"15.jpg",
	"wechat-01.jpg",
	"wechat-02.jpg",
	"wechat-03.jpg",
	"wechat-04.jpg",
	"wechat-05.jpg",
	"wechat-06.png",
	"wechat-07.jpg",
	"wechat-08.jpg",
	"wechat-09.jpg",
	"wechat-10.jpg",
	"wechat-11.jpg",
];
const existingBannerWebps = [
	"17.webp",
	"18.webp",
	"19.webp",
	"20.webp",
	"22.webp",
	"23.webp",
	"24.webp",
	"25.webp",
	"26.webp",
	"27.webp",
	"28.webp",
	"29.webp",
	"30.webp",
	"31.webp",
	"32.webp",
	"33.webp",
	"34.webp",
	"35.webp",
	"36.webp",
	"37.webp",
];
const musicCovers = [
	"children-of-the-city.png",
	"hero.jpg",
	"in-hell-we-live-lament.jpg",
	"kaiju.jpg",
	"saikai.jpg",
	"through-patches-of-violet.jpg",
	"tian-tian.jpg",
];

async function fileSize(relativePath) {
	return (await fs.stat(path.join(root, relativePath))).size;
}

async function convertBanner(sourceName) {
	const sourcePath = path.join(root, bannerDirectory, sourceName);
	const outputName = `${path.parse(sourceName).name}.webp`;
	const publicOutput = path.join(root, bannerDirectory, outputName);
	const mirrorOutput = path.join(root, bannerMirrorDirectory, outputName);
	await fs.mkdir(path.dirname(mirrorOutput), { recursive: true });
	await sharp(sourcePath)
		.rotate()
		.resize({ width: 1920, height: 1920, fit: "inside", withoutEnlargement: true })
		.webp({ quality: 80 })
		.toFile(publicOutput);
	await fs.copyFile(publicOutput, mirrorOutput);
	return { sourcePath, publicOutput };
}

async function mirrorExistingBanner(sourceName) {
	const mirrorPath = path.join(root, bannerMirrorDirectory, sourceName);
	const publicPath = path.join(root, bannerDirectory, sourceName);
	await fs.mkdir(path.dirname(publicPath), { recursive: true });
	await fs.mkdir(path.dirname(mirrorPath), { recursive: true });
	await fs.copyFile(mirrorPath, publicPath);
}

async function convertMusicCover(sourceName) {
	const sourcePath = path.join(root, "src/assets/music/cover", sourceName);
	const outputPath = path.join(
		root,
		"src/assets/music/cover",
		`${path.parse(sourceName).name}.webp`,
	);
	await sharp(sourcePath)
		.rotate()
		.resize(192, 192, { fit: "cover", position: "centre" })
		.webp({ quality: 80 })
		.toFile(outputPath);
	return { sourcePath, outputPath };
}

const convertedBanners = [];
for (const sourceName of bannerSources) {
	convertedBanners.push(await convertBanner(sourceName));
}
for (const sourceName of existingBannerWebps) {
	await mirrorExistingBanner(sourceName);
}

const convertedCovers = [];
for (const sourceName of musicCovers) {
	convertedCovers.push(await convertMusicCover(sourceName));
}

async function report(label, entries) {
	let before = 0;
	let after = 0;
	for (const { sourcePath, publicOutput, outputPath } of entries) {
		before += await fileSize(path.relative(root, sourcePath));
		after += await fileSize(path.relative(root, publicOutput ?? outputPath));
	}
	console.log(`${label}: ${before} -> ${after} bytes (${((1 - after / before) * 100).toFixed(1)}% smaller)`);
}

await report("Banner originals -> WebP", convertedBanners);
await report("Music cover originals -> 192x192 WebP", convertedCovers);
console.log(`Mirrored ${existingBannerWebps.length} existing banner WebPs to public/.`);
