const fs = require("node:fs");
const path = require("node:path");
const { seasonCoverIds, seasonQueries } = require("./build-anime-data.cjs");

const outputPath = path.join(__dirname, "../src/data/anime-season-covers.json");
const entries = Object.entries(seasonQueries);

function queryFor(batch) {
	const selections = batch
		.map(
			([title, search], index) => {
				const media = seasonCoverIds[title]
					? `Media(id: ${seasonCoverIds[title]})`
					: `Page(perPage: 1) {\n  media(search: ${JSON.stringify(search)}, type: ANIME, format: TV) `;
				const fields = `{\n  title { romaji english native }\n  coverImage { extraLarge large }\n}`;
				return seasonCoverIds[title]
					? `item${index}: ${media} ${fields}`
					: `item${index}: ${media}${fields}\n}`;
			},
			)
		.join("\n");
	return `query {\n${selections}\n}`;
}

async function fetchBatch(batch) {
	let lastError;
	for (let attempt = 0; attempt < 3; attempt += 1) {
		try {
			const response = await fetch("https://graphql.anilist.co", {
				method: "POST",
				headers: { "content-type": "application/json", accept: "application/json" },
				body: JSON.stringify({ query: queryFor(batch) }),
			});
			if (!response.ok) throw new Error(`AniList returned ${response.status}`);
			const payload = await response.json();
			if (payload.errors?.length) throw new Error(payload.errors.map((error) => error.message).join("; "));
			return payload.data;
		} catch (error) {
			lastError = error;
			await new Promise((resolve) => setTimeout(resolve, 1200 * (attempt + 1)));
		}
	}
	throw lastError;
}

async function main() {
	const existing = fs.existsSync(outputPath) ? JSON.parse(fs.readFileSync(outputPath, "utf8")) : {};
	const next = { ...existing };
	const unresolved = [];
	const batchSize = 4;

	for (let offset = 0; offset < entries.length; offset += batchSize) {
		const batch = entries.slice(offset, offset + batchSize);
		const data = await fetchBatch(batch);
		batch.forEach(([title, search], index) => {
			const result = seasonCoverIds[title] ? data[`item${index}`] : data[`item${index}`]?.media?.[0];
			const cover = result?.coverImage?.extraLarge || result?.coverImage?.large;
			if (cover) {
				next[title] = cover;
				console.log(`${title} <- ${result.title.romaji}`);
			} else {
				unresolved.push(`${title} (${search})`);
			}
		});
		fs.writeFileSync(outputPath, `${JSON.stringify(next, null, "\t")}\n`);
		await new Promise((resolve) => setTimeout(resolve, 800));
	}

	fs.writeFileSync(outputPath, `${JSON.stringify(next, null, "\t")}\n`);
	console.log(`Saved ${Object.keys(next).length} individual season covers.`);
	if (unresolved.length) console.warn(`Unresolved:\n${unresolved.join("\n")}`);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
