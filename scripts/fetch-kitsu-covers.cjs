const fs = require("node:fs");

const searches = {
	lycoris: "Lycoris Recoil",
	rezero: "Re:ZERO",
	jujutsu: "Jujutsu Kaisen",
	aot: "Attack on Titan",
	jojo: "JoJo Bizarre Adventure",
	mygo: "Bang Dream Its MyGO",
	mujica: "Bang Dream Ave Mujica",
	mob: "Mob Psycho 100",
	opm: "One Punch Man",
	megalo: "Megalo Box",
	arknights: "Arknights",
	demonslayer: "Demon Slayer",
	vanitas: "The Case Study of Vanitas",
	bungou: "Bungo Stray Dogs",
	overlord: "Overlord",
	yanineko: "Yani Neko",
	reviewers: "Interspecies Reviewers",
	redo: "Redo of Healer",
	bocchi: "Bocchi the Rock",
	frieren: "Frieren",
	oregairu: "My Teen Romantic Comedy SNAFU",
	ngnl: "No Game No Life",
	spyfamily: "Spy x Family",
	chainsaw: "Chainsaw Man",
	dororo: "Dororo",
	engage: "Engage Kiss",
	isekaiOjisan: "Uncle from Another World",
	konosuba: "KonoSuba",
	danmachi: "Is It Wrong to Try to Pick Up Girls in a Dungeon",
	nanatsu: "The Seven Deadly Sins",
	fabiniku: "Life with an Ordinary Guy Who Reincarnated into a Total Fantasy Knockout",
	nana: "Talentless Nana",
	gotoubun: "The Quintessential Quintuplets",
	majo: "Wandering Witch",
	datealive: "Date A Live",
	oresuki: "ORESUKI",
	baka: "Baka and Test",
	mahouore: "Magical Girl Ore",
	zombieland: "Zombie Land Saga",
	korezom: "Is This a Zombie",
	danskoko: "Daily Lives of High School Boys",
	saiki: "The Disastrous Life of Saiki K",
	gabriel: "Gabriel DropOut",
	kaguya: "Kaguya sama Love is War",
	oshinoko: "Oshi no Ko",
	idaten: "The Idaten Deities Know Only Peace",
	akuyaku: "From Bureaucrat to Villainess",
	iyapan: "Iya na Kao sare nagara Opantsu Misete Moraitai",
	watanare: "There is No Freaking Way I will be Your Lover",
	cautious: "Cautious Hero",
};

const { execFile } = require("node:child_process");

function findCover(query) {
	const gql = `query { Media(search: ${JSON.stringify(query)}, type: ANIME) { coverImage { extraLarge large } } }`;
	return new Promise((resolve) => {
		execFile(
			"curl",
			[
				"-L", "--connect-timeout", "8", "--max-time", "20", "-sS", "-X", "POST",
				"https://graphql.anilist.co", "-H", "Content-Type: application/json",
				"--data", JSON.stringify({ query: gql }),
			],
			(error, stdout) => {
				if (error) return resolve("");
				try {
					const cover = JSON.parse(stdout).data?.Media?.coverImage;
					resolve(cover?.extraLarge || cover?.large || "");
				} catch { resolve(""); }
			},
		);
	});
}

async function main() {
	const covers = {};
	const entries = Object.entries(searches);
	for (let i = 0; i < entries.length; i += 3) {
		await Promise.all(entries.slice(i, i + 3).map(async ([key, query]) => {
			covers[key] = await findCover(query);
		}));
	}
	fs.writeFileSync("/private/tmp/kitsu-covers.json", JSON.stringify(covers, null, 2));
	console.log(`Found ${Object.values(covers).filter(Boolean).length}/${entries.length} covers.`);
}

main();
