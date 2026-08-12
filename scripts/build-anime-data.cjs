const fs = require("node:fs");

const covers = require("../src/data/anime-covers.json");
const seasonCovers = require("../src/data/anime-season-covers.json");
const fallbackCover = "/assets/anime/lycoris-recoil.jpg";

// A season is not displayed as "2012 起".  The map below is the actual first
// broadcast year of each multi-season TV entry; standalone titles use their
// own year in the `series` list below.
const seasonYears = {
	"Re:从零开始的异世界生活 第一季": 2016, "Re:从零开始的异世界生活 第二季": 2020, "Re:从零开始的异世界生活 第三季": 2024,
	"咒术回战 第一季": 2020, "咒术回战 第二季": 2023, "咒术回战 第三季": 2026,
	"进击的巨人 第一季": 2013, "进击的巨人 第二季": 2017, "进击的巨人 第三季": 2018, "进击的巨人 第四季": 2020,
	"JOJO的奇妙冒险 第一季": 2012, "JOJO的奇妙冒险 第二季": 2014, "JOJO的奇妙冒险 第三季": 2016, "JOJO的奇妙冒险 第四季": 2018, "JOJO的奇妙冒险 第五季": 2021,
	"灵能百分百 第一季": 2016, "灵能百分百 第二季": 2019, "灵能百分百 第三季": 2022,
	"一拳超人 第一季": 2015, "一拳超人 第二季": 2019, "一拳超人 第三季": 2025,
	"MEGALOBOX 第一季": 2018, "MEGALOBOX 第二季": 2021,
	"明日方舟 第一季": 2022, "明日方舟 第二季": 2023, "明日方舟 第三季": 2025,
	"鬼灭之刃 第一季": 2019, "鬼灭之刃 第二季": 2021, "鬼灭之刃 第三季": 2023, "鬼灭之刃 第四季": 2024,
	"瓦尼塔斯的手记 第一季": 2021, "瓦尼塔斯的手记 第二季": 2022,
	"文豪野犬 第一季": 2016, "文豪野犬 第二季": 2016, "文豪野犬 第三季": 2019, "文豪野犬 第四季": 2023, "文豪野犬 第五季": 2023,
	"OVERLORD 第一季": 2015, "OVERLORD 第二季": 2018, "OVERLORD 第三季": 2018, "OVERLORD 第四季": 2022,
	"我的青春恋爱物语果然有问题 第一季": 2013, "我的青春恋爱物语果然有问题 第二季": 2015, "我的青春恋爱物语果然有问题 第三季": 2020,
	"间谍过家家 第一季": 2022, "间谍过家家 第二季": 2023, "间谍过家家 第三季": 2025,
	"为美好的世界献上祝福！ 第一季": 2016, "为美好的世界献上祝福！ 第二季": 2017, "为美好的世界献上祝福！ 第三季": 2024,
	"在地下城寻求邂逅是否搞错了什么 第一季": 2015, "在地下城寻求邂逅是否搞错了什么 第二季": 2019, "在地下城寻求邂逅是否搞错了什么 第三季": 2020, "在地下城寻求邂逅是否搞错了什么 第四季": 2022, "在地下城寻求邂逅是否搞错了什么 第五季": 2024,
	"七大罪 第一季": 2014, "七大罪 第二季": 2018, "七大罪 第三季": 2019, "七大罪 第四季": 2021,
	"五等分的新娘 第一季": 2019, "五等分的新娘 第二季": 2021,
	"约会大作战 第一季": 2013, "约会大作战 第二季": 2014, "约会大作战 第三季": 2019, "约会大作战 第四季": 2022, "约会大作战 第五季": 2024,
	"笨蛋，测验，召唤兽 第一季": 2010, "笨蛋，测验，召唤兽 第二季": 2011,
	"佐贺偶像是传奇 第一季": 2018, "佐贺偶像是传奇 第二季": 2021,
	"这个是僵尸吗？ 第一季": 2011, "这个是僵尸吗？ 第二季": 2012,
	"齐木楠雄的灾难 第一季": 2016, "齐木楠雄的灾难 第二季": 2018, "齐木楠雄的灾难 第三季": 2018,
	"辉夜大小姐想让我告白 第一季": 2019, "辉夜大小姐想让我告白 第二季": 2020, "辉夜大小姐想让我告白 第三季": 2022,
	"【我推的孩子】 第一季": 2023, "【我推的孩子】 第二季": 2024,
	"一脸嫌弃地给你看胖次 第一季": 2018, "一脸嫌弃地给你看胖次 第二季": 2019,
};

// AniList searches for the individual TV seasons.  These deliberately use the
// official Romanised titles: a series-level search would otherwise return the
// same poster for every season.
const seasonQueries = {
	"Re:从零开始的异世界生活 第一季": "Re:ZERO -Starting Life in Another World-",
	"Re:从零开始的异世界生活 第二季": "Re:ZERO -Starting Life in Another World- Season 2",
	"Re:从零开始的异世界生活 第三季": "Re:ZERO -Starting Life in Another World- Season 3",
	"咒术回战 第一季": "Jujutsu Kaisen",
	"咒术回战 第二季": "Jujutsu Kaisen 2nd Season",
	"咒术回战 第三季": "Jujutsu Kaisen: Shimetsu Kaiyuu - Zenpen",
	"进击的巨人 第一季": "Shingeki no Kyojin",
	"进击的巨人 第二季": "Shingeki no Kyojin Season 2",
	"进击的巨人 第三季": "Shingeki no Kyojin Season 3",
	"进击的巨人 第四季": "Shingeki no Kyojin: The Final Season",
	"JOJO的奇妙冒险 第一季": "JoJo no Kimyou na Bouken (TV)",
	"JOJO的奇妙冒险 第二季": "JoJo no Kimyou na Bouken: Stardust Crusaders",
	"JOJO的奇妙冒险 第三季": "JoJo no Kimyou na Bouken: Diamond wa Kudakenai",
	"JOJO的奇妙冒险 第四季": "JoJo no Kimyou na Bouken: Ougon no Kaze",
	"JOJO的奇妙冒险 第五季": "JoJo no Kimyou na Bouken: Stone Ocean",
	"灵能百分百 第一季": "Mob Psycho 100",
	"灵能百分百 第二季": "Mob Psycho 100 II",
	"灵能百分百 第三季": "Mob Psycho 100 III",
	"一拳超人 第一季": "One Punch Man",
	"一拳超人 第二季": "One Punch Man 2nd Season",
	"一拳超人 第三季": "One Punch Man 3",
	"MEGALOBOX 第一季": "Megalo Box",
	"MEGALOBOX 第二季": "Nomad: Megalo Box 2",
	"明日方舟 第一季": "Arknights: Prelude to Dawn",
	"明日方舟 第二季": "Arknights: Perish in Frost",
	"明日方舟 第三季": "Arknights: Rise from Ember",
	"鬼灭之刃 第一季": "Kimetsu no Yaiba",
	"鬼灭之刃 第二季": "Kimetsu no Yaiba: Yuukaku-hen",
	"鬼灭之刃 第三季": "Kimetsu no Yaiba: Katanakaji no Sato-hen",
	"鬼灭之刃 第四季": "Kimetsu no Yaiba: Hashira Geiko-hen",
	"瓦尼塔斯的手记 第一季": "Vanitas no Karte",
	"瓦尼塔斯的手记 第二季": "Vanitas no Karte Part 2",
	"文豪野犬 第一季": "Bungou Stray Dogs",
	"文豪野犬 第二季": "Bungou Stray Dogs 2nd Season",
	"文豪野犬 第三季": "Bungou Stray Dogs 3rd Season",
	"文豪野犬 第四季": "Bungou Stray Dogs 4th Season",
	"文豪野犬 第五季": "Bungou Stray Dogs 5th Season",
	"OVERLORD 第一季": "Overlord",
	"OVERLORD 第二季": "Overlord II",
	"OVERLORD 第三季": "Overlord III",
	"OVERLORD 第四季": "Overlord IV",
	"我的青春恋爱物语果然有问题 第一季": "Yahari Ore no Seishun Love Comedy wa Machigatteiru.",
	"我的青春恋爱物语果然有问题 第二季": "Yahari Ore no Seishun Love Comedy wa Machigatteiru. Zoku",
	"我的青春恋爱物语果然有问题 第三季": "Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan",
	"间谍过家家 第一季": "Spy x Family",
	"间谍过家家 第二季": "Spy x Family Season 2",
	"间谍过家家 第三季": "Spy x Family Season 3",
	"为美好的世界献上祝福！ 第一季": "Kono Subarashii Sekai ni Shukufuku wo!",
	"为美好的世界献上祝福！ 第二季": "Kono Subarashii Sekai ni Shukufuku wo! 2",
	"为美好的世界献上祝福！ 第三季": "Kono Subarashii Sekai ni Shukufuku wo! 3",
	"在地下城寻求邂逅是否搞错了什么 第一季": "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka",
	"在地下城寻求邂逅是否搞错了什么 第二季": "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka II",
	"在地下城寻求邂逅是否搞错了什么 第三季": "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka III",
	"在地下城寻求邂逅是否搞错了什么 第四季": "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV",
	"在地下城寻求邂逅是否搞错了什么 第五季": "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka V",
	"七大罪 第一季": "Nanatsu no Taizai",
	"七大罪 第二季": "Nanatsu no Taizai: Imashime no Fukkatsu",
	"七大罪 第三季": "Nanatsu no Taizai: Kamigami no Gekirin",
	"七大罪 第四季": "Nanatsu no Taizai: Fundo no Shinpan",
	"七大罪 第五季": "Nanatsu no Taizai: Mokushiroku no Yonkishi",
	"五等分的新娘 第一季": "5-toubun no Hanayome",
	"五等分的新娘 第二季": "5-toubun no Hanayome ∬",
	"约会大作战 第一季": "Date A Live",
	"约会大作战 第二季": "Date A Live II",
	"约会大作战 第三季": "Date A Live III",
	"约会大作战 第四季": "Date A Live IV",
	"约会大作战 第五季": "Date A Live V",
	"笨蛋，测验，召唤兽 第一季": "Baka to Test to Shoukanjuu",
	"笨蛋，测验，召唤兽 第二季": "Baka to Test to Shoukanjuu Ni!",
	"佐贺偶像是传奇 第一季": "Zombie Land Saga",
	"佐贺偶像是传奇 第二季": "Zombie Land Saga: Revenge",
	"这个是僵尸吗？ 第一季": "Kore wa Zombie Desu ka?",
	"这个是僵尸吗？ 第二季": "Kore wa Zombie Desu ka? of the Dead",
	"齐木楠雄的灾难 第一季": "Saiki Kusuo no Ψ-nan",
	"齐木楠雄的灾难 第二季": "Saiki Kusuo no Ψ-nan 2",
	"齐木楠雄的灾难 第三季": "Saiki Kusuo no Ψ-nan: Kanketsu-hen",
	"辉夜大小姐想让我告白 第一季": "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
	"辉夜大小姐想让我告白 第二季": "Kaguya-sama wa Kokurasetai? Tensai-tachi no Renai Zunousen",
	"辉夜大小姐想让我告白 第三季": "Kaguya-sama wa Kokurasetai: Ultra Romantic",
	"【我推的孩子】 第一季": "Oshi no Ko",
	"【我推的孩子】 第二季": "Oshi no Ko 2nd Season",
	"一脸嫌弃地给你看胖次 第一季": "Iya na Kao sare nagara Opantsu Misete Moraitai",
	"一脸嫌弃地给你看胖次 第二季": "Iya na Kao sare nagara Opantsu Misete Moraitai 2",
};

// The API search endpoint is intentionally permissive; these are the few
// seasons for which a similarly named OVA or special is ranked first.  Pinning
// them by AniList media id keeps TV seasons distinct and excludes films.
const seasonCoverIds = {
	"瓦尼塔斯的手记 第二季": 135136,
	"我的青春恋爱物语果然有问题 第一季": 14813,
	"我的青春恋爱物语果然有问题 第二季": 20698,
	"我的青春恋爱物语果然有问题 第三季": 108489,
	"一拳超人 第二季": 97668,
	"七大罪 第一季": 20789,
	"七大罪 第四季": 116752,
	"JOJO的奇妙冒险 第五季": 131942,
	"齐木楠雄的灾难 第一季": 21804,
	"齐木楠雄的灾难 第二季": 98034,
	"齐木楠雄的灾难 第三季": 104580,
	"辉夜大小姐想让我告白 第一季": 101921,
	"辉夜大小姐想让我告白 第二季": 112641,
	"一脸嫌弃地给你看胖次 第一季": 101970,
	"一脸嫌弃地给你看胖次 第二季": 104979,
};

const series = [
	["莉可莉丝", "lycoris", ["TV动画", "原创"], "A-1 Pictures", 2022, [13]],
	["Re:从零开始的异世界生活", "rezero", ["异世界", "奇幻"], "WHITE FOX", 2016, [25, 25, 16]],
	["咒术回战", "jujutsu", ["战斗", "奇幻"], "MAPPA", 2020, [24, 23, 12]],
	["进击的巨人", "aot", ["黑暗奇幻", "战争"], "WIT STUDIO / MAPPA", 2013, [25, 12, 22, 16]],
	["JOJO的奇妙冒险", "jojo", ["冒险", "超能力"], "david production", 2012, [26, 48, 39, 39, 38]],
	["BanG Dream! It's MyGO!!!!!", "mygo", ["乐队", "青春"], "SANZIGEN", 2023, [13]],
	["BanG Dream! Ave Mujica", "mujica", ["乐队", "青春"], "SANZIGEN", 2025, [13]],
	["灵能百分百", "mob", ["超能力", "成长"], "BONES", 2016, [12, 13, 12]],
	["一拳超人", "opm", ["战斗", "喜剧"], "MADHOUSE / J.C.STAFF", 2015, [12, 12, 12]],
	["MEGALOBOX", "megalo", ["拳击", "运动"], "TMS Entertainment", 2018, [13, 13]],
	["明日方舟", "arknights", ["游戏改", "科幻"], "Yostar Pictures", 2022, [8, 8, 10]],
	["鬼灭之刃", "demonslayer", ["战斗", "奇幻"], "ufotable", 2019, [26, 11, 11, 8]],
	["瓦尼塔斯的手记", "vanitas", ["吸血鬼", "奇幻"], "BONES", 2021, [12, 12]],
	["文豪野犬", "bungou", ["异能", "战斗"], "BONES", 2016, [12, 12, 12, 13, 11]],
	["OVERLORD", "overlord", ["异世界", "奇幻"], "MADHOUSE", 2015, [13, 13, 13, 13]],
	["尼古喵喵", "yanineko", ["喜剧", "日常"], "Bibury Animation Studios", 2026, [12]],
	["异种族风俗娘评鉴指南", "reviewers", ["喜剧", "奇幻"], "Passione", 2020, [12]],
	["回复术士的重来人生", "redo", ["奇幻", "复仇"], "TNK", 2021, [12]],
	["孤独摇滚！", "bocchi", ["乐队", "青春"], "CloverWorks", 2022, [12]],
	["葬送的芙莉莲", "frieren", ["奇幻", "冒险"], "MADHOUSE", 2023, [28]],
	["我的青春恋爱物语果然有问题", "oregairu", ["校园", "恋爱"], "Brain's Base / feel.", 2013, [13, 13, 12]],
	["游戏人生", "ngnl", ["异世界", "智斗"], "MADHOUSE", 2014, [12]],
	["间谍过家家", "spyfamily", ["喜剧", "家庭"], "WIT STUDIO / CloverWorks", 2022, [25, 12, 13]],
	["电锯人", "chainsaw", ["战斗", "黑暗奇幻"], "MAPPA", 2022, [12]],
	["多罗罗", "dororo", ["历史", "奇幻"], "MAPPA / 手冢Production", 2019, [24]],
	["Engage Kiss", "engage", ["恋爱", "战斗"], "A-1 Pictures", 2022, [13]],
	["异世界舅舅", "isekaiOjisan", ["异世界", "喜剧"], "AtelierPontdarc", 2022, [13]],
	["为美好的世界献上祝福！", "konosuba", ["异世界", "喜剧"], "Studio Deen / Drive", 2016, [10, 10, 11]],
	["为美好的世界献上爆焰！", "konosuba", ["异世界", "喜剧"], "Drive", 2023, [12]],
	["在地下城寻求邂逅是否搞错了什么", "danmachi", ["奇幻", "冒险"], "J.C.STAFF", 2015, [13, 12, 12, 22, 15]],
	["七大罪", "nanatsu", ["奇幻", "战斗"], "A-1 Pictures / Studio Deen", 2014, [24, 24, 24, 24]],
	["与变成了异世界美少女的好友一起冒险", "fabiniku", ["异世界", "喜剧"], "OLM", 2022, [12]],
	["无能力者娜娜", "nana", ["悬疑", "校园"], "Bridge", 2020, [13]],
	["五等分的新娘", "gotoubun", ["恋爱", "校园"], "Tezuka Productions / Bibury", 2019, [12, 12]],
	["魔女之旅", "majo", ["奇幻", "旅行"], "C2C", 2020, [12]],
	["约会大作战", "datealive", ["恋爱", "科幻"], "AIC PLUS+ / Production IMS / J.C.STAFF / GEEKTOYS", 2013, [12, 10, 12, 12, 12]],
	["喜欢本大爷的竟然就你一个？", "oresuki", ["恋爱", "校园"], "CONNECT", 2019, [12]],
	["笨蛋，测验，召唤兽", "baka", ["校园", "喜剧"], "SILVER LINK.", 2010, [13, 13]],
	["魔法少女俺", "mahouore", ["喜剧", "魔法少女"], "Pierrot Plus", 2018, [12]],
	["佐贺偶像是传奇", "zombieland", ["偶像", "喜剧"], "MAPPA", 2018, [12, 12]],
	["这个是僵尸吗？", "korezom", ["喜剧", "奇幻"], "Studio Deen", 2011, [12, 10]],
	["男子高中生的日常", "danskoko", ["日常", "喜剧"], "SUNRISE", 2012, [12]],
	["齐木楠雄的灾难", "saiki", ["超能力", "喜剧"], "J.C.STAFF / EGG FIRM", 2016, [120, 24, 2]],
	["珈百璃的堕落", "gabriel", ["日常", "喜剧"], "动画工房", 2017, [12]],
	["辉夜大小姐想让我告白", "kaguya", ["恋爱", "校园"], "A-1 Pictures", 2019, [12, 12, 13]],
	["【我推的孩子】", "oshinoko", ["偶像", "悬疑"], "动画工房", 2023, [11, 13]],
	["平稳世代的韦驮天们", "idaten", ["奇幻", "战斗"], "MAPPA", 2021, [11]],
	["中年大叔转生反派千金", "akuyaku", ["异世界", "喜剧"], "亚细亚堂", 2025, [12]],
	["一脸嫌弃地给你看胖次", "iyapan", ["短篇", "喜剧"], "UWAN Pictures", 2018, [6, 6]],
	["恋人不行", "watanare", ["校园", "百合"], "Studio MOTHER", 2025, [12]],
	["这个勇者明明超强却过分谨慎", "cautious", ["异世界", "喜剧"], "WHITE FOX", 2019, [12]],
];

function seasonTitle(title, index, count) {
	if (count === 1) return title;
	if (title === "为美好的世界献上爆焰！") return title;
	const numerals = ["第一季", "第二季", "第三季", "第四季", "第五季", "第六季"];
	return `${title} ${numerals[index] || `第${index + 1}季`}`;
}

const animeList = series.flatMap(([title, coverKey, genre, studio, startYear, seasons]) =>
	seasons.map((episodes, index) => {
		const titleWithSeason = seasonTitle(title, index, seasons.length);
		return {
		title: titleWithSeason,
		status: "completed",
		rating: 9,
		cover: seasonCovers[titleWithSeason] || covers[coverKey] || fallbackCover,
		description: `${title}电视动画${seasons.length > 1 ? `第${index + 1}季` : ""}。`,
		episodes: `全${episodes}话`,
		year: String(seasonYears[titleWithSeason] || startYear),
		genre,
		studio,
		// Bilibili's season search is the first destination for every card.  It
		// avoids sending visitors to a foreign catalogue when B站 has the title.
		link: `https://search.bilibili.com/all?keyword=${encodeURIComponent(titleWithSeason)}`,
		progress: episodes,
		totalEpisodes: episodes,
		startDate: "",
		endDate: "",
	};
	}),
);

function writeAnimeData() {
	fs.writeFileSync(
		"src/data/anime.ts",
		`// 本地番剧数据配置\nexport interface AnimeItem {\n\ttitle: string;\n\tstatus: \"watching\" | \"completed\" | \"planned\";\n\trating: number;\n\tcover: string;\n\tdescription: string;\n\tepisodes: string;\n\tyear: string;\n\tgenre: string[];\n\tstudio: string;\n\tlink: string;\n\tprogress: number;\n\ttotalEpisodes: number;\n\tstartDate: string;\n\tendDate: string;\n}\n\nconst localAnimeList: AnimeItem[] = ${JSON.stringify(animeList, null, "\t")};\n\nexport default localAnimeList;\n`,
	);
	console.log(`Wrote ${animeList.length} completed TV-anime entries.`);
}

if (require.main === module) writeAnimeData();

module.exports = { seasonQueries, seasonCoverIds, writeAnimeData };
