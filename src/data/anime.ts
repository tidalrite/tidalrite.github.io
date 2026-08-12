// 本地番剧数据配置
export interface AnimeItem {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
}

const localAnimeList: AnimeItem[] = [
	{
		"title": "莉可莉丝",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx143270-rfkyiYXhek5w.jpg",
		"description": "莉可莉丝电视动画。",
		"episodes": "全13话",
		"year": "2022",
		"genre": [
			"TV动画",
			"原创"
		],
		"studio": "A-1 Pictures",
		"link": "https://search.bilibili.com/all?keyword=%E8%8E%89%E5%8F%AF%E8%8E%89%E4%B8%9D",
		"progress": 13,
		"totalEpisodes": 13,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "Re:从零开始的异世界生活 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21355-wRVUrGxpvIQQ.jpg",
		"description": "Re:从零开始的异世界生活电视动画第1季。",
		"episodes": "全25话",
		"year": "2016",
		"genre": [
			"异世界",
			"奇幻"
		],
		"studio": "WHITE FOX",
		"link": "https://search.bilibili.com/all?keyword=Re%3A%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 25,
		"totalEpisodes": 25,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "Re:从零开始的异世界生活 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108632-lQWnmw7XaNOK.jpg",
		"description": "Re:从零开始的异世界生活电视动画第2季。",
		"episodes": "全25话",
		"year": "2020",
		"genre": [
			"异世界",
			"奇幻"
		],
		"studio": "WHITE FOX",
		"link": "https://search.bilibili.com/all?keyword=Re%3A%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 25,
		"totalEpisodes": 25,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "Re:从零开始的异世界生活 第三季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163134-yieRFbvUOH9a.jpg",
		"description": "Re:从零开始的异世界生活电视动画第3季。",
		"episodes": "全16话",
		"year": "2024",
		"genre": [
			"异世界",
			"奇幻"
		],
		"studio": "WHITE FOX",
		"link": "https://search.bilibili.com/all?keyword=Re%3A%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB%20%E7%AC%AC%E4%B8%89%E5%AD%A3",
		"progress": 16,
		"totalEpisodes": 16,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "咒术回战 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-LHBAeoZDIsnF.jpg",
		"description": "咒术回战电视动画第1季。",
		"episodes": "全24话",
		"year": "2020",
		"genre": [
			"战斗",
			"奇幻"
		],
		"studio": "MAPPA",
		"link": "https://search.bilibili.com/all?keyword=%E5%92%92%E6%9C%AF%E5%9B%9E%E6%88%98%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 24,
		"totalEpisodes": 24,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "咒术回战 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145064-hSNRJM03pvv1.jpg",
		"description": "咒术回战电视动画第2季。",
		"episodes": "全23话",
		"year": "2023",
		"genre": [
			"战斗",
			"奇幻"
		],
		"studio": "MAPPA",
		"link": "https://search.bilibili.com/all?keyword=%E5%92%92%E6%9C%AF%E5%9B%9E%E6%88%98%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 23,
		"totalEpisodes": 23,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "咒术回战 第三季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx172463-LnXqHzt74SJL.jpg",
		"description": "咒术回战电视动画第3季。",
		"episodes": "全12话",
		"year": "2026",
		"genre": [
			"战斗",
			"奇幻"
		],
		"studio": "MAPPA",
		"link": "https://search.bilibili.com/all?keyword=%E5%92%92%E6%9C%AF%E5%9B%9E%E6%88%98%20%E7%AC%AC%E4%B8%89%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "进击的巨人 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-buvcRTBx4NSm.jpg",
		"description": "进击的巨人电视动画第1季。",
		"episodes": "全25话",
		"year": "2013",
		"genre": [
			"黑暗奇幻",
			"战争"
		],
		"studio": "WIT STUDIO / MAPPA",
		"link": "https://search.bilibili.com/all?keyword=%E8%BF%9B%E5%87%BB%E7%9A%84%E5%B7%A8%E4%BA%BA%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 25,
		"totalEpisodes": 25,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "进击的巨人 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20958-HuFJyr54Mmir.jpg",
		"description": "进击的巨人电视动画第2季。",
		"episodes": "全12话",
		"year": "2017",
		"genre": [
			"黑暗奇幻",
			"战争"
		],
		"studio": "WIT STUDIO / MAPPA",
		"link": "https://search.bilibili.com/all?keyword=%E8%BF%9B%E5%87%BB%E7%9A%84%E5%B7%A8%E4%BA%BA%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "进击的巨人 第三季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99147-AiPDD8cwlCfi.jpg",
		"description": "进击的巨人电视动画第3季。",
		"episodes": "全22话",
		"year": "2018",
		"genre": [
			"黑暗奇幻",
			"战争"
		],
		"studio": "WIT STUDIO / MAPPA",
		"link": "https://search.bilibili.com/all?keyword=%E8%BF%9B%E5%87%BB%E7%9A%84%E5%B7%A8%E4%BA%BA%20%E7%AC%AC%E4%B8%89%E5%AD%A3",
		"progress": 22,
		"totalEpisodes": 22,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "进击的巨人 第四季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110277-sKUNXAsWMNFw.jpg",
		"description": "进击的巨人电视动画第4季。",
		"episodes": "全16话",
		"year": "2020",
		"genre": [
			"黑暗奇幻",
			"战争"
		],
		"studio": "WIT STUDIO / MAPPA",
		"link": "https://search.bilibili.com/all?keyword=%E8%BF%9B%E5%87%BB%E7%9A%84%E5%B7%A8%E4%BA%BA%20%E7%AC%AC%E5%9B%9B%E5%AD%A3",
		"progress": 16,
		"totalEpisodes": 16,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "JOJO的奇妙冒险 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx14719-VT5dRzTBSZ0w.jpg",
		"description": "JOJO的奇妙冒险电视动画第1季。",
		"episodes": "全26话",
		"year": "2012",
		"genre": [
			"冒险",
			"超能力"
		],
		"studio": "david production",
		"link": "https://search.bilibili.com/all?keyword=JOJO%E7%9A%84%E5%A5%87%E5%A6%99%E5%86%92%E9%99%A9%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 26,
		"totalEpisodes": 26,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "JOJO的奇妙冒险 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20474-xuqem5GBlBtb.jpg",
		"description": "JOJO的奇妙冒险电视动画第2季。",
		"episodes": "全48话",
		"year": "2014",
		"genre": [
			"冒险",
			"超能力"
		],
		"studio": "david production",
		"link": "https://search.bilibili.com/all?keyword=JOJO%E7%9A%84%E5%A5%87%E5%A6%99%E5%86%92%E9%99%A9%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 48,
		"totalEpisodes": 48,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "JOJO的奇妙冒险 第三季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21450-D7XFwEQjZ5GA.jpg",
		"description": "JOJO的奇妙冒险电视动画第3季。",
		"episodes": "全39话",
		"year": "2016",
		"genre": [
			"冒险",
			"超能力"
		],
		"studio": "david production",
		"link": "https://search.bilibili.com/all?keyword=JOJO%E7%9A%84%E5%A5%87%E5%A6%99%E5%86%92%E9%99%A9%20%E7%AC%AC%E4%B8%89%E5%AD%A3",
		"progress": 39,
		"totalEpisodes": 39,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "JOJO的奇妙冒险 第四季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx102883-S9KzdMJhDswJ.png",
		"description": "JOJO的奇妙冒险电视动画第4季。",
		"episodes": "全39话",
		"year": "2018",
		"genre": [
			"冒险",
			"超能力"
		],
		"studio": "david production",
		"link": "https://search.bilibili.com/all?keyword=JOJO%E7%9A%84%E5%A5%87%E5%A6%99%E5%86%92%E9%99%A9%20%E7%AC%AC%E5%9B%9B%E5%AD%A3",
		"progress": 39,
		"totalEpisodes": 39,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "JOJO的奇妙冒险 第五季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx131942-rermlZ9lplHX.png",
		"description": "JOJO的奇妙冒险电视动画第5季。",
		"episodes": "全38话",
		"year": "2021",
		"genre": [
			"冒险",
			"超能力"
		],
		"studio": "david production",
		"link": "https://search.bilibili.com/all?keyword=JOJO%E7%9A%84%E5%A5%87%E5%A6%99%E5%86%92%E9%99%A9%20%E7%AC%AC%E4%BA%94%E5%AD%A3",
		"progress": 38,
		"totalEpisodes": 38,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "BanG Dream! It's MyGO!!!!!",
		"status": "completed",
		"rating": 9,
		"cover": "https://media.kitsu.app/anime/47291/poster_image/large-3239525738cb75bd98c3c9f5ae77ef85.jpeg",
		"description": "BanG Dream! It's MyGO!!!!!电视动画。",
		"episodes": "全13话",
		"year": "2023",
		"genre": [
			"乐队",
			"青春"
		],
		"studio": "SANZIGEN",
		"link": "https://search.bilibili.com/all?keyword=BanG%20Dream!%20It's%20MyGO!!!!!",
		"progress": 13,
		"totalEpisodes": 13,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "BanG Dream! Ave Mujica",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx169295-WxoGTeMbje4T.jpg",
		"description": "BanG Dream! Ave Mujica电视动画。",
		"episodes": "全13话",
		"year": "2025",
		"genre": [
			"乐队",
			"青春"
		],
		"studio": "SANZIGEN",
		"link": "https://search.bilibili.com/all?keyword=BanG%20Dream!%20Ave%20Mujica",
		"progress": 13,
		"totalEpisodes": 13,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "灵能百分百 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21507-6YUSbh2m0N1p.jpg",
		"description": "灵能百分百电视动画第1季。",
		"episodes": "全12话",
		"year": "2016",
		"genre": [
			"超能力",
			"成长"
		],
		"studio": "BONES",
		"link": "https://search.bilibili.com/all?keyword=%E7%81%B5%E8%83%BD%E7%99%BE%E5%88%86%E7%99%BE%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "灵能百分百 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101338-rokVscjRYzdP.jpg",
		"description": "灵能百分百电视动画第2季。",
		"episodes": "全13话",
		"year": "2019",
		"genre": [
			"超能力",
			"成长"
		],
		"studio": "BONES",
		"link": "https://search.bilibili.com/all?keyword=%E7%81%B5%E8%83%BD%E7%99%BE%E5%88%86%E7%99%BE%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 13,
		"totalEpisodes": 13,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "灵能百分百 第三季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140439-bPKmhe1wNxc9.jpg",
		"description": "灵能百分百电视动画第3季。",
		"episodes": "全12话",
		"year": "2022",
		"genre": [
			"超能力",
			"成长"
		],
		"studio": "BONES",
		"link": "https://search.bilibili.com/all?keyword=%E7%81%B5%E8%83%BD%E7%99%BE%E5%88%86%E7%99%BE%20%E7%AC%AC%E4%B8%89%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "一拳超人 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21087-B5DHjqZ3kW4b.jpg",
		"description": "一拳超人电视动画第1季。",
		"episodes": "全12话",
		"year": "2015",
		"genre": [
			"战斗",
			"喜剧"
		],
		"studio": "MADHOUSE / J.C.STAFF",
		"link": "https://search.bilibili.com/all?keyword=%E4%B8%80%E6%8B%B3%E8%B6%85%E4%BA%BA%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "一拳超人 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97668-nC8gQrXVxt7k.png",
		"description": "一拳超人电视动画第2季。",
		"episodes": "全12话",
		"year": "2019",
		"genre": [
			"战斗",
			"喜剧"
		],
		"studio": "MADHOUSE / J.C.STAFF",
		"link": "https://search.bilibili.com/all?keyword=%E4%B8%80%E6%8B%B3%E8%B6%85%E4%BA%BA%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "一拳超人 第三季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx153800-8SpzdHOaZCoU.jpg",
		"description": "一拳超人电视动画第3季。",
		"episodes": "全12话",
		"year": "2025",
		"genre": [
			"战斗",
			"喜剧"
		],
		"studio": "MADHOUSE / J.C.STAFF",
		"link": "https://search.bilibili.com/all?keyword=%E4%B8%80%E6%8B%B3%E8%B6%85%E4%BA%BA%20%E7%AC%AC%E4%B8%89%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "MEGALOBOX 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b100298-A5VQUcw7ZC64.jpg",
		"description": "MEGALOBOX电视动画第1季。",
		"episodes": "全13话",
		"year": "2018",
		"genre": [
			"拳击",
			"运动"
		],
		"studio": "TMS Entertainment",
		"link": "https://search.bilibili.com/all?keyword=MEGALOBOX%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 13,
		"totalEpisodes": 13,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "MEGALOBOX 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113359-FnjG2VppJF9f.png",
		"description": "MEGALOBOX电视动画第2季。",
		"episodes": "全13话",
		"year": "2021",
		"genre": [
			"拳击",
			"运动"
		],
		"studio": "TMS Entertainment",
		"link": "https://search.bilibili.com/all?keyword=MEGALOBOX%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 13,
		"totalEpisodes": 13,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "明日方舟 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140660-iJAS9omOJdzU.jpg",
		"description": "明日方舟电视动画第1季。",
		"episodes": "全8话",
		"year": "2022",
		"genre": [
			"游戏改",
			"科幻"
		],
		"studio": "Yostar Pictures",
		"link": "https://search.bilibili.com/all?keyword=%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 8,
		"totalEpisodes": 8,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "明日方舟 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx158895-QPy3ElZBKziT.jpg",
		"description": "明日方舟电视动画第2季。",
		"episodes": "全8话",
		"year": "2023",
		"genre": [
			"游戏改",
			"科幻"
		],
		"studio": "Yostar Pictures",
		"link": "https://search.bilibili.com/all?keyword=%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 8,
		"totalEpisodes": 8,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "明日方舟 第三季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx177175-cr5tlJIj7dEi.jpg",
		"description": "明日方舟电视动画第3季。",
		"episodes": "全10话",
		"year": "2025",
		"genre": [
			"游戏改",
			"科幻"
		],
		"studio": "Yostar Pictures",
		"link": "https://search.bilibili.com/all?keyword=%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%20%E7%AC%AC%E4%B8%89%E5%AD%A3",
		"progress": 10,
		"totalEpisodes": 10,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "鬼灭之刃 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-WBsBl0ClmgYL.jpg",
		"description": "鬼灭之刃电视动画第1季。",
		"episodes": "全26话",
		"year": "2019",
		"genre": [
			"战斗",
			"奇幻"
		],
		"studio": "ufotable",
		"link": "https://search.bilibili.com/all?keyword=%E9%AC%BC%E7%81%AD%E4%B9%8B%E5%88%83%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 26,
		"totalEpisodes": 26,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "鬼灭之刃 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx142329-kET1PIXJv2eW.jpg",
		"description": "鬼灭之刃电视动画第2季。",
		"episodes": "全11话",
		"year": "2021",
		"genre": [
			"战斗",
			"奇幻"
		],
		"studio": "ufotable",
		"link": "https://search.bilibili.com/all?keyword=%E9%AC%BC%E7%81%AD%E4%B9%8B%E5%88%83%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 11,
		"totalEpisodes": 11,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "鬼灭之刃 第三季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145139-rRimpHGWLhym.png",
		"description": "鬼灭之刃电视动画第3季。",
		"episodes": "全11话",
		"year": "2023",
		"genre": [
			"战斗",
			"奇幻"
		],
		"studio": "ufotable",
		"link": "https://search.bilibili.com/all?keyword=%E9%AC%BC%E7%81%AD%E4%B9%8B%E5%88%83%20%E7%AC%AC%E4%B8%89%E5%AD%A3",
		"progress": 11,
		"totalEpisodes": 11,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "鬼灭之刃 第四季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166240-PBV7zukIHW7V.png",
		"description": "鬼灭之刃电视动画第4季。",
		"episodes": "全8话",
		"year": "2024",
		"genre": [
			"战斗",
			"奇幻"
		],
		"studio": "ufotable",
		"link": "https://search.bilibili.com/all?keyword=%E9%AC%BC%E7%81%AD%E4%B9%8B%E5%88%83%20%E7%AC%AC%E5%9B%9B%E5%AD%A3",
		"progress": 8,
		"totalEpisodes": 8,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "瓦尼塔斯的手记 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx131646-cuyGfKcekZ62.jpg",
		"description": "瓦尼塔斯的手记电视动画第1季。",
		"episodes": "全12话",
		"year": "2021",
		"genre": [
			"吸血鬼",
			"奇幻"
		],
		"studio": "BONES",
		"link": "https://search.bilibili.com/all?keyword=%E7%93%A6%E5%B0%BC%E5%A1%94%E6%96%AF%E7%9A%84%E6%89%8B%E8%AE%B0%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "瓦尼塔斯的手记 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx135136-wVMApb1FEmkz.jpg",
		"description": "瓦尼塔斯的手记电视动画第2季。",
		"episodes": "全12话",
		"year": "2022",
		"genre": [
			"吸血鬼",
			"奇幻"
		],
		"studio": "BONES",
		"link": "https://search.bilibili.com/all?keyword=%E7%93%A6%E5%B0%BC%E5%A1%94%E6%96%AF%E7%9A%84%E6%89%8B%E8%AE%B0%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "文豪野犬 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21311-hAXyT8Yoh6G9.jpg",
		"description": "文豪野犬电视动画第1季。",
		"episodes": "全12话",
		"year": "2016",
		"genre": [
			"异能",
			"战斗"
		],
		"studio": "BONES",
		"link": "https://search.bilibili.com/all?keyword=%E6%96%87%E8%B1%AA%E9%87%8E%E7%8A%AC%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "文豪野犬 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21679-9MKdz1A7YLV7.jpg",
		"description": "文豪野犬电视动画第2季。",
		"episodes": "全12话",
		"year": "2016",
		"genre": [
			"异能",
			"战斗"
		],
		"studio": "BONES",
		"link": "https://search.bilibili.com/all?keyword=%E6%96%87%E8%B1%AA%E9%87%8E%E7%8A%AC%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "文豪野犬 第三季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx103223-bfdnnKWxE4YE.jpg",
		"description": "文豪野犬电视动画第3季。",
		"episodes": "全12话",
		"year": "2019",
		"genre": [
			"异能",
			"战斗"
		],
		"studio": "BONES",
		"link": "https://search.bilibili.com/all?keyword=%E6%96%87%E8%B1%AA%E9%87%8E%E7%8A%AC%20%E7%AC%AC%E4%B8%89%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "文豪野犬 第四季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx141249-8tjavEDHmLoT.jpg",
		"description": "文豪野犬电视动画第4季。",
		"episodes": "全13话",
		"year": "2023",
		"genre": [
			"异能",
			"战斗"
		],
		"studio": "BONES",
		"link": "https://search.bilibili.com/all?keyword=%E6%96%87%E8%B1%AA%E9%87%8E%E7%8A%AC%20%E7%AC%AC%E5%9B%9B%E5%AD%A3",
		"progress": 13,
		"totalEpisodes": 13,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "文豪野犬 第五季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163263-uz881pFAyi7P.jpg",
		"description": "文豪野犬电视动画第5季。",
		"episodes": "全11话",
		"year": "2023",
		"genre": [
			"异能",
			"战斗"
		],
		"studio": "BONES",
		"link": "https://search.bilibili.com/all?keyword=%E6%96%87%E8%B1%AA%E9%87%8E%E7%8A%AC%20%E7%AC%AC%E4%BA%94%E5%AD%A3",
		"progress": 11,
		"totalEpisodes": 11,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "OVERLORD 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20832-vUNm5zrYWifc.jpg",
		"description": "OVERLORD电视动画第1季。",
		"episodes": "全13话",
		"year": "2015",
		"genre": [
			"异世界",
			"奇幻"
		],
		"studio": "MADHOUSE",
		"link": "https://search.bilibili.com/all?keyword=OVERLORD%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 13,
		"totalEpisodes": 13,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "OVERLORD 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx98437-5q0GWqHhNAgJ.jpg",
		"description": "OVERLORD电视动画第2季。",
		"episodes": "全13话",
		"year": "2018",
		"genre": [
			"异世界",
			"奇幻"
		],
		"studio": "MADHOUSE",
		"link": "https://search.bilibili.com/all?keyword=OVERLORD%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 13,
		"totalEpisodes": 13,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "OVERLORD 第三季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101474-tGRyvSAWMjU9.jpg",
		"description": "OVERLORD电视动画第3季。",
		"episodes": "全13话",
		"year": "2018",
		"genre": [
			"异世界",
			"奇幻"
		],
		"studio": "MADHOUSE",
		"link": "https://search.bilibili.com/all?keyword=OVERLORD%20%E7%AC%AC%E4%B8%89%E5%AD%A3",
		"progress": 13,
		"totalEpisodes": 13,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "OVERLORD 第四季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx133844-E32FjKZ0XxEs.jpg",
		"description": "OVERLORD电视动画第4季。",
		"episodes": "全13话",
		"year": "2022",
		"genre": [
			"异世界",
			"奇幻"
		],
		"studio": "MADHOUSE",
		"link": "https://search.bilibili.com/all?keyword=OVERLORD%20%E7%AC%AC%E5%9B%9B%E5%AD%A3",
		"progress": 13,
		"totalEpisodes": 13,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "尼古喵喵",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx207141-h5q5KJPd6vaX.jpg",
		"description": "尼古喵喵电视动画。",
		"episodes": "全12话",
		"year": "2026",
		"genre": [
			"喜剧",
			"日常"
		],
		"studio": "Bibury Animation Studios",
		"link": "https://search.bilibili.com/all?keyword=%E5%B0%BC%E5%8F%A4%E5%96%B5%E5%96%B5",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "异种族风俗娘评鉴指南",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110270-4NVRRcffK70k.jpg",
		"description": "异种族风俗娘评鉴指南电视动画。",
		"episodes": "全12话",
		"year": "2020",
		"genre": [
			"喜剧",
			"奇幻"
		],
		"studio": "Passione",
		"link": "https://search.bilibili.com/all?keyword=%E5%BC%82%E7%A7%8D%E6%97%8F%E9%A3%8E%E4%BF%97%E5%A8%98%E8%AF%84%E9%89%B4%E6%8C%87%E5%8D%97",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "回复术士的重来人生",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113425-tYGRUa5pgZje.jpg",
		"description": "回复术士的重来人生电视动画。",
		"episodes": "全12话",
		"year": "2021",
		"genre": [
			"奇幻",
			"复仇"
		],
		"studio": "TNK",
		"link": "https://search.bilibili.com/all?keyword=%E5%9B%9E%E5%A4%8D%E6%9C%AF%E5%A3%AB%E7%9A%84%E9%87%8D%E6%9D%A5%E4%BA%BA%E7%94%9F",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "孤独摇滚！",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx130003-HTDmeL4RGeJ4.png",
		"description": "孤独摇滚！电视动画。",
		"episodes": "全12话",
		"year": "2022",
		"genre": [
			"乐队",
			"青春"
		],
		"studio": "CloverWorks",
		"link": "https://search.bilibili.com/all?keyword=%E5%AD%A4%E7%8B%AC%E6%91%87%E6%BB%9A%EF%BC%81",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "葬送的芙莉莲",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg",
		"description": "葬送的芙莉莲电视动画。",
		"episodes": "全28话",
		"year": "2023",
		"genre": [
			"奇幻",
			"冒险"
		],
		"studio": "MADHOUSE",
		"link": "https://search.bilibili.com/all?keyword=%E8%91%AC%E9%80%81%E7%9A%84%E8%8A%99%E8%8E%89%E8%8E%B2",
		"progress": 28,
		"totalEpisodes": 28,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "我的青春恋爱物语果然有问题 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx14813-3mNvcKNEQcDs.jpg",
		"description": "我的青春恋爱物语果然有问题电视动画第1季。",
		"episodes": "全13话",
		"year": "2013",
		"genre": [
			"校园",
			"恋爱"
		],
		"studio": "Brain's Base / feel.",
		"link": "https://search.bilibili.com/all?keyword=%E6%88%91%E7%9A%84%E9%9D%92%E6%98%A5%E6%81%8B%E7%88%B1%E7%89%A9%E8%AF%AD%E6%9E%9C%E7%84%B6%E6%9C%89%E9%97%AE%E9%A2%98%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 13,
		"totalEpisodes": 13,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "我的青春恋爱物语果然有问题 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20698-YZIYor2zW3Ta.png",
		"description": "我的青春恋爱物语果然有问题电视动画第2季。",
		"episodes": "全13话",
		"year": "2015",
		"genre": [
			"校园",
			"恋爱"
		],
		"studio": "Brain's Base / feel.",
		"link": "https://search.bilibili.com/all?keyword=%E6%88%91%E7%9A%84%E9%9D%92%E6%98%A5%E6%81%8B%E7%88%B1%E7%89%A9%E8%AF%AD%E6%9E%9C%E7%84%B6%E6%9C%89%E9%97%AE%E9%A2%98%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 13,
		"totalEpisodes": 13,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "我的青春恋爱物语果然有问题 第三季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108489-yGmYCE6dhFta.png",
		"description": "我的青春恋爱物语果然有问题电视动画第3季。",
		"episodes": "全12话",
		"year": "2020",
		"genre": [
			"校园",
			"恋爱"
		],
		"studio": "Brain's Base / feel.",
		"link": "https://search.bilibili.com/all?keyword=%E6%88%91%E7%9A%84%E9%9D%92%E6%98%A5%E6%81%8B%E7%88%B1%E7%89%A9%E8%AF%AD%E6%9E%9C%E7%84%B6%E6%9C%89%E9%97%AE%E9%A2%98%20%E7%AC%AC%E4%B8%89%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "游戏人生",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b19815-sEOQ9yQaPKlk.jpg",
		"description": "游戏人生电视动画。",
		"episodes": "全12话",
		"year": "2014",
		"genre": [
			"异世界",
			"智斗"
		],
		"studio": "MADHOUSE",
		"link": "https://search.bilibili.com/all?keyword=%E6%B8%B8%E6%88%8F%E4%BA%BA%E7%94%9F",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "间谍过家家 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140960-Kb6R5nYQfjmP.jpg",
		"description": "间谍过家家电视动画第1季。",
		"episodes": "全25话",
		"year": "2022",
		"genre": [
			"喜剧",
			"家庭"
		],
		"studio": "WIT STUDIO / CloverWorks",
		"link": "https://search.bilibili.com/all?keyword=%E9%97%B4%E8%B0%8D%E8%BF%87%E5%AE%B6%E5%AE%B6%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 25,
		"totalEpisodes": 25,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "间谍过家家 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b158927-lfO85WVguYgc.png",
		"description": "间谍过家家电视动画第2季。",
		"episodes": "全12话",
		"year": "2023",
		"genre": [
			"喜剧",
			"家庭"
		],
		"studio": "WIT STUDIO / CloverWorks",
		"link": "https://search.bilibili.com/all?keyword=%E9%97%B4%E8%B0%8D%E8%BF%87%E5%AE%B6%E5%AE%B6%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "间谍过家家 第三季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx177937-Tzgg6rAdhCoH.jpg",
		"description": "间谍过家家电视动画第3季。",
		"episodes": "全13话",
		"year": "2025",
		"genre": [
			"喜剧",
			"家庭"
		],
		"studio": "WIT STUDIO / CloverWorks",
		"link": "https://search.bilibili.com/all?keyword=%E9%97%B4%E8%B0%8D%E8%BF%87%E5%AE%B6%E5%AE%B6%20%E7%AC%AC%E4%B8%89%E5%AD%A3",
		"progress": 13,
		"totalEpisodes": 13,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "电锯人",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx127230-DdP4vAdssLoz.png",
		"description": "电锯人电视动画。",
		"episodes": "全12话",
		"year": "2022",
		"genre": [
			"战斗",
			"黑暗奇幻"
		],
		"studio": "MAPPA",
		"link": "https://search.bilibili.com/all?keyword=%E7%94%B5%E9%94%AF%E4%BA%BA",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "多罗罗",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101347-TGaDwEYqLfm1.jpg",
		"description": "多罗罗电视动画。",
		"episodes": "全24话",
		"year": "2019",
		"genre": [
			"历史",
			"奇幻"
		],
		"studio": "MAPPA / 手冢Production",
		"link": "https://search.bilibili.com/all?keyword=%E5%A4%9A%E7%BD%97%E7%BD%97",
		"progress": 24,
		"totalEpisodes": 24,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "Engage Kiss",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146625-DmXjpJ2y8fDn.jpg",
		"description": "Engage Kiss电视动画。",
		"episodes": "全13话",
		"year": "2022",
		"genre": [
			"恋爱",
			"战斗"
		],
		"studio": "A-1 Pictures",
		"link": "https://search.bilibili.com/all?keyword=Engage%20Kiss",
		"progress": 13,
		"totalEpisodes": 13,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "异世界舅舅",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx135806-uhqZSNTYZe04.jpg",
		"description": "异世界舅舅电视动画。",
		"episodes": "全13话",
		"year": "2022",
		"genre": [
			"异世界",
			"喜剧"
		],
		"studio": "AtelierPontdarc",
		"link": "https://search.bilibili.com/all?keyword=%E5%BC%82%E4%B8%96%E7%95%8C%E8%88%85%E8%88%85",
		"progress": 13,
		"totalEpisodes": 13,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "为美好的世界献上祝福！ 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21202-mPOr80AEjUcZ.png",
		"description": "为美好的世界献上祝福！电视动画第1季。",
		"episodes": "全10话",
		"year": "2016",
		"genre": [
			"异世界",
			"喜剧"
		],
		"studio": "Studio Deen / Drive",
		"link": "https://search.bilibili.com/all?keyword=%E4%B8%BA%E7%BE%8E%E5%A5%BD%E7%9A%84%E4%B8%96%E7%95%8C%E7%8C%AE%E4%B8%8A%E7%A5%9D%E7%A6%8F%EF%BC%81%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 10,
		"totalEpisodes": 10,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "为美好的世界献上祝福！ 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21699-Fkbnkl9ZC6fW.png",
		"description": "为美好的世界献上祝福！电视动画第2季。",
		"episodes": "全10话",
		"year": "2017",
		"genre": [
			"异世界",
			"喜剧"
		],
		"studio": "Studio Deen / Drive",
		"link": "https://search.bilibili.com/all?keyword=%E4%B8%BA%E7%BE%8E%E5%A5%BD%E7%9A%84%E4%B8%96%E7%95%8C%E7%8C%AE%E4%B8%8A%E7%A5%9D%E7%A6%8F%EF%BC%81%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 10,
		"totalEpisodes": 10,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "为美好的世界献上祝福！ 第三季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx136804-7FVftG67FPBc.jpg",
		"description": "为美好的世界献上祝福！电视动画第3季。",
		"episodes": "全11话",
		"year": "2024",
		"genre": [
			"异世界",
			"喜剧"
		],
		"studio": "Studio Deen / Drive",
		"link": "https://search.bilibili.com/all?keyword=%E4%B8%BA%E7%BE%8E%E5%A5%BD%E7%9A%84%E4%B8%96%E7%95%8C%E7%8C%AE%E4%B8%8A%E7%A5%9D%E7%A6%8F%EF%BC%81%20%E7%AC%AC%E4%B8%89%E5%AD%A3",
		"progress": 11,
		"totalEpisodes": 11,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "为美好的世界献上爆焰！",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21202-mPOr80AEjUcZ.png",
		"description": "为美好的世界献上爆焰！电视动画。",
		"episodes": "全12话",
		"year": "2023",
		"genre": [
			"异世界",
			"喜剧"
		],
		"studio": "Drive",
		"link": "https://search.bilibili.com/all?keyword=%E4%B8%BA%E7%BE%8E%E5%A5%BD%E7%9A%84%E4%B8%96%E7%95%8C%E7%8C%AE%E4%B8%8A%E7%88%86%E7%84%B0%EF%BC%81",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "在地下城寻求邂逅是否搞错了什么 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20920-MTREwZOG4BAD.jpg",
		"description": "在地下城寻求邂逅是否搞错了什么电视动画第1季。",
		"episodes": "全13话",
		"year": "2015",
		"genre": [
			"奇幻",
			"冒险"
		],
		"studio": "J.C.STAFF",
		"link": "https://search.bilibili.com/all?keyword=%E5%9C%A8%E5%9C%B0%E4%B8%8B%E5%9F%8E%E5%AF%BB%E6%B1%82%E9%82%82%E9%80%85%E6%98%AF%E5%90%A6%E6%90%9E%E9%94%99%E4%BA%86%E4%BB%80%E4%B9%88%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 13,
		"totalEpisodes": 13,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "在地下城寻求邂逅是否搞错了什么 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101167-Yasvj97UR9ue.png",
		"description": "在地下城寻求邂逅是否搞错了什么电视动画第2季。",
		"episodes": "全12话",
		"year": "2019",
		"genre": [
			"奇幻",
			"冒险"
		],
		"studio": "J.C.STAFF",
		"link": "https://search.bilibili.com/all?keyword=%E5%9C%A8%E5%9C%B0%E4%B8%8B%E5%9F%8E%E5%AF%BB%E6%B1%82%E9%82%82%E9%80%85%E6%98%AF%E5%90%A6%E6%90%9E%E9%94%99%E4%BA%86%E4%BB%80%E4%B9%88%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "在地下城寻求邂逅是否搞错了什么 第三季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112124-ZmoOntBuiSUU.jpg",
		"description": "在地下城寻求邂逅是否搞错了什么电视动画第3季。",
		"episodes": "全12话",
		"year": "2020",
		"genre": [
			"奇幻",
			"冒险"
		],
		"studio": "J.C.STAFF",
		"link": "https://search.bilibili.com/all?keyword=%E5%9C%A8%E5%9C%B0%E4%B8%8B%E5%9F%8E%E5%AF%BB%E6%B1%82%E9%82%82%E9%80%85%E6%98%AF%E5%90%A6%E6%90%9E%E9%94%99%E4%BA%86%E4%BB%80%E4%B9%88%20%E7%AC%AC%E4%B8%89%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "在地下城寻求邂逅是否搞错了什么 第四季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx155211-GHT9uzXEkYS7.png",
		"description": "在地下城寻求邂逅是否搞错了什么电视动画第4季。",
		"episodes": "全22话",
		"year": "2022",
		"genre": [
			"奇幻",
			"冒险"
		],
		"studio": "J.C.STAFF",
		"link": "https://search.bilibili.com/all?keyword=%E5%9C%A8%E5%9C%B0%E4%B8%8B%E5%9F%8E%E5%AF%BB%E6%B1%82%E9%82%82%E9%80%85%E6%98%AF%E5%90%A6%E6%90%9E%E9%94%99%E4%BA%86%E4%BB%80%E4%B9%88%20%E7%AC%AC%E5%9B%9B%E5%AD%A3",
		"progress": 22,
		"totalEpisodes": 22,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "在地下城寻求邂逅是否搞错了什么 第五季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx207385-hyeDUEGGUxeV.jpg",
		"description": "在地下城寻求邂逅是否搞错了什么电视动画第5季。",
		"episodes": "全15话",
		"year": "2024",
		"genre": [
			"奇幻",
			"冒险"
		],
		"studio": "J.C.STAFF",
		"link": "https://search.bilibili.com/all?keyword=%E5%9C%A8%E5%9C%B0%E4%B8%8B%E5%9F%8E%E5%AF%BB%E6%B1%82%E9%82%82%E9%80%85%E6%98%AF%E5%90%A6%E6%90%9E%E9%94%99%E4%BA%86%E4%BB%80%E4%B9%88%20%E7%AC%AC%E4%BA%94%E5%AD%A3",
		"progress": 15,
		"totalEpisodes": 15,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "七大罪 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20789-Ma5ouSYPkru9.jpg",
		"description": "七大罪电视动画第1季。",
		"episodes": "全24话",
		"year": "2014",
		"genre": [
			"奇幻",
			"战斗"
		],
		"studio": "A-1 Pictures / Studio Deen",
		"link": "https://search.bilibili.com/all?keyword=%E4%B8%83%E5%A4%A7%E7%BD%AA%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 24,
		"totalEpisodes": 24,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "七大罪 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99539-caPX28RSsgRP.jpg",
		"description": "七大罪电视动画第2季。",
		"episodes": "全24话",
		"year": "2018",
		"genre": [
			"奇幻",
			"战斗"
		],
		"studio": "A-1 Pictures / Studio Deen",
		"link": "https://search.bilibili.com/all?keyword=%E4%B8%83%E5%A4%A7%E7%BD%AA%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 24,
		"totalEpisodes": 24,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "七大罪 第三季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108928-DuyUzi0JyPIr.jpg",
		"description": "七大罪电视动画第3季。",
		"episodes": "全24话",
		"year": "2019",
		"genre": [
			"奇幻",
			"战斗"
		],
		"studio": "A-1 Pictures / Studio Deen",
		"link": "https://search.bilibili.com/all?keyword=%E4%B8%83%E5%A4%A7%E7%BD%AA%20%E7%AC%AC%E4%B8%89%E5%AD%A3",
		"progress": 24,
		"totalEpisodes": 24,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "七大罪 第四季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116752-yIJuKp88adqt.jpg",
		"description": "七大罪电视动画第4季。",
		"episodes": "全24话",
		"year": "2021",
		"genre": [
			"奇幻",
			"战斗"
		],
		"studio": "A-1 Pictures / Studio Deen",
		"link": "https://search.bilibili.com/all?keyword=%E4%B8%83%E5%A4%A7%E7%BD%AA%20%E7%AC%AC%E5%9B%9B%E5%AD%A3",
		"progress": 24,
		"totalEpisodes": 24,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "与变成了异世界美少女的好友一起冒险",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx134252-6pwG0YdI20aQ.jpg",
		"description": "与变成了异世界美少女的好友一起冒险电视动画。",
		"episodes": "全12话",
		"year": "2022",
		"genre": [
			"异世界",
			"喜剧"
		],
		"studio": "OLM",
		"link": "https://search.bilibili.com/all?keyword=%E4%B8%8E%E5%8F%98%E6%88%90%E4%BA%86%E5%BC%82%E4%B8%96%E7%95%8C%E7%BE%8E%E5%B0%91%E5%A5%B3%E7%9A%84%E5%A5%BD%E5%8F%8B%E4%B8%80%E8%B5%B7%E5%86%92%E9%99%A9",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "无能力者娜娜",
		"status": "completed",
		"rating": 9,
		"cover": "https://media.kitsu.app/anime/poster_images/43534/large.jpg",
		"description": "无能力者娜娜电视动画。",
		"episodes": "全13话",
		"year": "2020",
		"genre": [
			"悬疑",
			"校园"
		],
		"studio": "Bridge",
		"link": "https://search.bilibili.com/all?keyword=%E6%97%A0%E8%83%BD%E5%8A%9B%E8%80%85%E5%A8%9C%E5%A8%9C",
		"progress": 13,
		"totalEpisodes": 13,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "五等分的新娘 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx103572-cchriAdH95cQ.png",
		"description": "五等分的新娘电视动画第1季。",
		"episodes": "全12话",
		"year": "2019",
		"genre": [
			"恋爱",
			"校园"
		],
		"studio": "Tezuka Productions / Bibury",
		"link": "https://search.bilibili.com/all?keyword=%E4%BA%94%E7%AD%89%E5%88%86%E7%9A%84%E6%96%B0%E5%A8%98%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "五等分的新娘 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx109261-65rKxMDlcU9r.png",
		"description": "五等分的新娘电视动画第2季。",
		"episodes": "全12话",
		"year": "2021",
		"genre": [
			"恋爱",
			"校园"
		],
		"studio": "Tezuka Productions / Bibury",
		"link": "https://search.bilibili.com/all?keyword=%E4%BA%94%E7%AD%89%E5%88%86%E7%9A%84%E6%96%B0%E5%A8%98%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "魔女之旅",
		"status": "completed",
		"rating": 9,
		"cover": "https://media.kitsu.app/anime/poster_images/42627/large.jpg",
		"description": "魔女之旅电视动画。",
		"episodes": "全12话",
		"year": "2020",
		"genre": [
			"奇幻",
			"旅行"
		],
		"studio": "C2C",
		"link": "https://search.bilibili.com/all?keyword=%E9%AD%94%E5%A5%B3%E4%B9%8B%E6%97%85",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "约会大作战 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx15583-Sxd2J4RJdRhj.jpg",
		"description": "约会大作战电视动画第1季。",
		"episodes": "全12话",
		"year": "2013",
		"genre": [
			"恋爱",
			"科幻"
		],
		"studio": "AIC PLUS+ / Production IMS / J.C.STAFF / GEEKTOYS",
		"link": "https://search.bilibili.com/all?keyword=%E7%BA%A6%E4%BC%9A%E5%A4%A7%E4%BD%9C%E6%88%98%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "约会大作战 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx19163-eHXj3mNRaOXt.jpg",
		"description": "约会大作战电视动画第2季。",
		"episodes": "全10话",
		"year": "2014",
		"genre": [
			"恋爱",
			"科幻"
		],
		"studio": "AIC PLUS+ / Production IMS / J.C.STAFF / GEEKTOYS",
		"link": "https://search.bilibili.com/all?keyword=%E7%BA%A6%E4%BC%9A%E5%A4%A7%E4%BD%9C%E6%88%98%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 10,
		"totalEpisodes": 10,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "约会大作战 第三季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx100722-M5nXzDkuGOLC.png",
		"description": "约会大作战电视动画第3季。",
		"episodes": "全12话",
		"year": "2019",
		"genre": [
			"恋爱",
			"科幻"
		],
		"studio": "AIC PLUS+ / Production IMS / J.C.STAFF / GEEKTOYS",
		"link": "https://search.bilibili.com/all?keyword=%E7%BA%A6%E4%BC%9A%E5%A4%A7%E4%BD%9C%E6%88%98%20%E7%AC%AC%E4%B8%89%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "约会大作战 第四季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116605-uzDakXnaZ1OW.jpg",
		"description": "约会大作战电视动画第4季。",
		"episodes": "全12话",
		"year": "2022",
		"genre": [
			"恋爱",
			"科幻"
		],
		"studio": "AIC PLUS+ / Production IMS / J.C.STAFF / GEEKTOYS",
		"link": "https://search.bilibili.com/all?keyword=%E7%BA%A6%E4%BC%9A%E5%A4%A7%E4%BD%9C%E6%88%98%20%E7%AC%AC%E5%9B%9B%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "约会大作战 第五季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151380-gvN5PjrybTw2.jpg",
		"description": "约会大作战电视动画第5季。",
		"episodes": "全12话",
		"year": "2024",
		"genre": [
			"恋爱",
			"科幻"
		],
		"studio": "AIC PLUS+ / Production IMS / J.C.STAFF / GEEKTOYS",
		"link": "https://search.bilibili.com/all?keyword=%E7%BA%A6%E4%BC%9A%E5%A4%A7%E4%BD%9C%E6%88%98%20%E7%AC%AC%E4%BA%94%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "喜欢本大爷的竟然就你一个？",
		"status": "completed",
		"rating": 9,
		"cover": "https://media.kitsu.app/anime/poster_images/42047/large.jpg",
		"description": "喜欢本大爷的竟然就你一个？电视动画。",
		"episodes": "全12话",
		"year": "2019",
		"genre": [
			"恋爱",
			"校园"
		],
		"studio": "CONNECT",
		"link": "https://search.bilibili.com/all?keyword=%E5%96%9C%E6%AC%A2%E6%9C%AC%E5%A4%A7%E7%88%B7%E7%9A%84%E7%AB%9F%E7%84%B6%E5%B0%B1%E4%BD%A0%E4%B8%80%E4%B8%AA%EF%BC%9F",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "笨蛋，测验，召唤兽 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx6347-DCSHLkCY7UT3.jpg",
		"description": "笨蛋，测验，召唤兽电视动画第1季。",
		"episodes": "全13话",
		"year": "2010",
		"genre": [
			"校园",
			"喜剧"
		],
		"studio": "SILVER LINK.",
		"link": "https://search.bilibili.com/all?keyword=%E7%AC%A8%E8%9B%8B%EF%BC%8C%E6%B5%8B%E9%AA%8C%EF%BC%8C%E5%8F%AC%E5%94%A4%E5%85%BD%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 13,
		"totalEpisodes": 13,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "笨蛋，测验，召唤兽 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx8516-uAw5qWkceccn.jpg",
		"description": "笨蛋，测验，召唤兽电视动画第2季。",
		"episodes": "全13话",
		"year": "2011",
		"genre": [
			"校园",
			"喜剧"
		],
		"studio": "SILVER LINK.",
		"link": "https://search.bilibili.com/all?keyword=%E7%AC%A8%E8%9B%8B%EF%BC%8C%E6%B5%8B%E9%AA%8C%EF%BC%8C%E5%8F%AC%E5%94%A4%E5%85%BD%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 13,
		"totalEpisodes": 13,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "魔法少女俺",
		"status": "completed",
		"rating": 9,
		"cover": "https://media.kitsu.app/anime/poster_images/14072/large.jpg",
		"description": "魔法少女俺电视动画。",
		"episodes": "全12话",
		"year": "2018",
		"genre": [
			"喜剧",
			"魔法少女"
		],
		"studio": "Pierrot Plus",
		"link": "https://search.bilibili.com/all?keyword=%E9%AD%94%E6%B3%95%E5%B0%91%E5%A5%B3%E4%BF%BA",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "佐贺偶像是传奇 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx103871-KEWbn3fkz499.png",
		"description": "佐贺偶像是传奇电视动画第1季。",
		"episodes": "全12话",
		"year": "2018",
		"genre": [
			"偶像",
			"喜剧"
		],
		"studio": "MAPPA",
		"link": "https://search.bilibili.com/all?keyword=%E4%BD%90%E8%B4%BA%E5%81%B6%E5%83%8F%E6%98%AF%E4%BC%A0%E5%A5%87%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "佐贺偶像是传奇 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110733-mv2p0VBBD3jz.jpg",
		"description": "佐贺偶像是传奇电视动画第2季。",
		"episodes": "全12话",
		"year": "2021",
		"genre": [
			"偶像",
			"喜剧"
		],
		"studio": "MAPPA",
		"link": "https://search.bilibili.com/all?keyword=%E4%BD%90%E8%B4%BA%E5%81%B6%E5%83%8F%E6%98%AF%E4%BC%A0%E5%A5%87%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "这个是僵尸吗？ 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx8841-pitrO5QSdfmA.png",
		"description": "这个是僵尸吗？电视动画第1季。",
		"episodes": "全12话",
		"year": "2011",
		"genre": [
			"喜剧",
			"奇幻"
		],
		"studio": "Studio Deen",
		"link": "https://search.bilibili.com/all?keyword=%E8%BF%99%E4%B8%AA%E6%98%AF%E5%83%B5%E5%B0%B8%E5%90%97%EF%BC%9F%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "这个是僵尸吗？ 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10790-Xaocm8xPX9Zh.jpg",
		"description": "这个是僵尸吗？电视动画第2季。",
		"episodes": "全10话",
		"year": "2012",
		"genre": [
			"喜剧",
			"奇幻"
		],
		"studio": "Studio Deen",
		"link": "https://search.bilibili.com/all?keyword=%E8%BF%99%E4%B8%AA%E6%98%AF%E5%83%B5%E5%B0%B8%E5%90%97%EF%BC%9F%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 10,
		"totalEpisodes": 10,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "男子高中生的日常",
		"status": "completed",
		"rating": 9,
		"cover": "https://media.kitsu.app/anime/poster_images/6616/large.jpg",
		"description": "男子高中生的日常电视动画。",
		"episodes": "全12话",
		"year": "2012",
		"genre": [
			"日常",
			"喜剧"
		],
		"studio": "SUNRISE",
		"link": "https://search.bilibili.com/all?keyword=%E7%94%B7%E5%AD%90%E9%AB%98%E4%B8%AD%E7%94%9F%E7%9A%84%E6%97%A5%E5%B8%B8",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "齐木楠雄的灾难 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21804-As6tDLAvEvNY.jpg",
		"description": "齐木楠雄的灾难电视动画第1季。",
		"episodes": "全120话",
		"year": "2016",
		"genre": [
			"超能力",
			"喜剧"
		],
		"studio": "J.C.STAFF / EGG FIRM",
		"link": "https://search.bilibili.com/all?keyword=%E9%BD%90%E6%9C%A8%E6%A5%A0%E9%9B%84%E7%9A%84%E7%81%BE%E9%9A%BE%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 120,
		"totalEpisodes": 120,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "齐木楠雄的灾难 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx98034-1eQ4F7SKxVas.jpg",
		"description": "齐木楠雄的灾难电视动画第2季。",
		"episodes": "全24话",
		"year": "2018",
		"genre": [
			"超能力",
			"喜剧"
		],
		"studio": "J.C.STAFF / EGG FIRM",
		"link": "https://search.bilibili.com/all?keyword=%E9%BD%90%E6%9C%A8%E6%A5%A0%E9%9B%84%E7%9A%84%E7%81%BE%E9%9A%BE%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 24,
		"totalEpisodes": 24,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "齐木楠雄的灾难 第三季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx104580-AfhlKn5rmOZS.png",
		"description": "齐木楠雄的灾难电视动画第3季。",
		"episodes": "全2话",
		"year": "2018",
		"genre": [
			"超能力",
			"喜剧"
		],
		"studio": "J.C.STAFF / EGG FIRM",
		"link": "https://search.bilibili.com/all?keyword=%E9%BD%90%E6%9C%A8%E6%A5%A0%E9%9B%84%E7%9A%84%E7%81%BE%E9%9A%BE%20%E7%AC%AC%E4%B8%89%E5%AD%A3",
		"progress": 2,
		"totalEpisodes": 2,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "珈百璃的堕落",
		"status": "completed",
		"rating": 9,
		"cover": "https://media.kitsu.app/anime/poster_images/12497/large.jpg",
		"description": "珈百璃的堕落电视动画。",
		"episodes": "全12话",
		"year": "2017",
		"genre": [
			"日常",
			"喜剧"
		],
		"studio": "动画工房",
		"link": "https://search.bilibili.com/all?keyword=%E7%8F%88%E7%99%BE%E7%92%83%E7%9A%84%E5%A0%95%E8%90%BD",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "辉夜大小姐想让我告白 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101921-ufrjLzhSz7L1.jpg",
		"description": "辉夜大小姐想让我告白电视动画第1季。",
		"episodes": "全12话",
		"year": "2019",
		"genre": [
			"恋爱",
			"校园"
		],
		"studio": "A-1 Pictures",
		"link": "https://search.bilibili.com/all?keyword=%E8%BE%89%E5%A4%9C%E5%A4%A7%E5%B0%8F%E5%A7%90%E6%83%B3%E8%AE%A9%E6%88%91%E5%91%8A%E7%99%BD%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "辉夜大小姐想让我告白 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112641-zoGC8d6FaPXU.jpg",
		"description": "辉夜大小姐想让我告白电视动画第2季。",
		"episodes": "全12话",
		"year": "2020",
		"genre": [
			"恋爱",
			"校园"
		],
		"studio": "A-1 Pictures",
		"link": "https://search.bilibili.com/all?keyword=%E8%BE%89%E5%A4%9C%E5%A4%A7%E5%B0%8F%E5%A7%90%E6%83%B3%E8%AE%A9%E6%88%91%E5%91%8A%E7%99%BD%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "辉夜大小姐想让我告白 第三季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx125367-1yuq9NFcQuLI.png",
		"description": "辉夜大小姐想让我告白电视动画第3季。",
		"episodes": "全13话",
		"year": "2022",
		"genre": [
			"恋爱",
			"校园"
		],
		"studio": "A-1 Pictures",
		"link": "https://search.bilibili.com/all?keyword=%E8%BE%89%E5%A4%9C%E5%A4%A7%E5%B0%8F%E5%A7%90%E6%83%B3%E8%AE%A9%E6%88%91%E5%91%8A%E7%99%BD%20%E7%AC%AC%E4%B8%89%E5%AD%A3",
		"progress": 13,
		"totalEpisodes": 13,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "【我推的孩子】 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx150672-WqmmwZ4nMzAy.png",
		"description": "【我推的孩子】电视动画第1季。",
		"episodes": "全11话",
		"year": "2023",
		"genre": [
			"偶像",
			"悬疑"
		],
		"studio": "动画工房",
		"link": "https://search.bilibili.com/all?keyword=%E3%80%90%E6%88%91%E6%8E%A8%E7%9A%84%E5%AD%A9%E5%AD%90%E3%80%91%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 11,
		"totalEpisodes": 11,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "【我推的孩子】 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166531-dAL5MsqDHUkj.jpg",
		"description": "【我推的孩子】电视动画第2季。",
		"episodes": "全13话",
		"year": "2024",
		"genre": [
			"偶像",
			"悬疑"
		],
		"studio": "动画工房",
		"link": "https://search.bilibili.com/all?keyword=%E3%80%90%E6%88%91%E6%8E%A8%E7%9A%84%E5%AD%A9%E5%AD%90%E3%80%91%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 13,
		"totalEpisodes": 13,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "平稳世代的韦驮天们",
		"status": "completed",
		"rating": 9,
		"cover": "https://media.kitsu.app/anime/poster_images/43734/large.jpg",
		"description": "平稳世代的韦驮天们电视动画。",
		"episodes": "全11话",
		"year": "2021",
		"genre": [
			"奇幻",
			"战斗"
		],
		"studio": "MAPPA",
		"link": "https://search.bilibili.com/all?keyword=%E5%B9%B3%E7%A8%B3%E4%B8%96%E4%BB%A3%E7%9A%84%E9%9F%A6%E9%A9%AE%E5%A4%A9%E4%BB%AC",
		"progress": 11,
		"totalEpisodes": 11,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "中年大叔转生反派千金",
		"status": "completed",
		"rating": 9,
		"cover": "https://media.kitsu.app/anime/poster_images/8009/large.jpg",
		"description": "中年大叔转生反派千金电视动画。",
		"episodes": "全12话",
		"year": "2025",
		"genre": [
			"异世界",
			"喜剧"
		],
		"studio": "亚细亚堂",
		"link": "https://search.bilibili.com/all?keyword=%E4%B8%AD%E5%B9%B4%E5%A4%A7%E5%8F%94%E8%BD%AC%E7%94%9F%E5%8F%8D%E6%B4%BE%E5%8D%83%E9%87%91",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "一脸嫌弃地给你看胖次 第一季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx101970-fvdeZLRnXEuX.jpg",
		"description": "一脸嫌弃地给你看胖次电视动画第1季。",
		"episodes": "全6话",
		"year": "2018",
		"genre": [
			"短篇",
			"喜剧"
		],
		"studio": "UWAN Pictures",
		"link": "https://search.bilibili.com/all?keyword=%E4%B8%80%E8%84%B8%E5%AB%8C%E5%BC%83%E5%9C%B0%E7%BB%99%E4%BD%A0%E7%9C%8B%E8%83%96%E6%AC%A1%20%E7%AC%AC%E4%B8%80%E5%AD%A3",
		"progress": 6,
		"totalEpisodes": 6,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "一脸嫌弃地给你看胖次 第二季",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx104979-GyV2oj4lKHD2.png",
		"description": "一脸嫌弃地给你看胖次电视动画第2季。",
		"episodes": "全6话",
		"year": "2019",
		"genre": [
			"短篇",
			"喜剧"
		],
		"studio": "UWAN Pictures",
		"link": "https://search.bilibili.com/all?keyword=%E4%B8%80%E8%84%B8%E5%AB%8C%E5%BC%83%E5%9C%B0%E7%BB%99%E4%BD%A0%E7%9C%8B%E8%83%96%E6%AC%A1%20%E7%AC%AC%E4%BA%8C%E5%AD%A3",
		"progress": 6,
		"totalEpisodes": 6,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "恋人不行",
		"status": "completed",
		"rating": 9,
		"cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx184591-jRXZ29bN61Zc.jpg",
		"description": "恋人不行电视动画。",
		"episodes": "全12话",
		"year": "2025",
		"genre": [
			"校园",
			"百合"
		],
		"studio": "Studio MOTHER",
		"link": "https://search.bilibili.com/all?keyword=%E6%81%8B%E4%BA%BA%E4%B8%8D%E8%A1%8C",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	},
	{
		"title": "这个勇者明明超强却过分谨慎",
		"status": "completed",
		"rating": 9,
		"cover": "https://media.kitsu.app/anime/poster_images/42079/large.jpg",
		"description": "这个勇者明明超强却过分谨慎电视动画。",
		"episodes": "全12话",
		"year": "2019",
		"genre": [
			"异世界",
			"喜剧"
		],
		"studio": "WHITE FOX",
		"link": "https://search.bilibili.com/all?keyword=%E8%BF%99%E4%B8%AA%E5%8B%87%E8%80%85%E6%98%8E%E6%98%8E%E8%B6%85%E5%BC%BA%E5%8D%B4%E8%BF%87%E5%88%86%E8%B0%A8%E6%85%8E",
		"progress": 12,
		"totalEpisodes": 12,
		"startDate": "",
		"endDate": ""
	}
];

export default localAnimeList;
