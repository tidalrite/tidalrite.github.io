import childrenOfTheCityCover from "../../../assets/music/cover/children-of-the-city.png?url";
import heroCover from "../../../assets/music/cover/hero.jpg?url";
import inHellWeLiveLamentCover from "../../../assets/music/cover/in-hell-we-live-lament.jpg?url";
import kaijuCover from "../../../assets/music/cover/kaiju.jpg?url";
import saikaiCover from "../../../assets/music/cover/saikai.jpg?url";
import throughPatchesOfVioletCover from "../../../assets/music/cover/through-patches-of-violet.jpg?url";
import tianTianCover from "../../../assets/music/cover/tian-tian.jpg?url";
import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";

export const DEFAULT_VOLUME = 0.7;

export const DEFAULT_COVER_URL = "/favicon/favicon.ico";

export const LOCAL_PLAYLIST: Song[] = [
	{
		id: 1,
		title: "Children of the City",
		artist: "Mili",
		cover: childrenOfTheCityCover,
		url: "assets/music/url/children-of-the-city.mp3",
		duration: 240,
	},
	{
		id: 2,
		title: "Hero",
		artist: "Mili",
		cover: heroCover,
		url: "assets/music/url/hero.mp3",
		duration: 215,
	},
	{
		id: 3,
		title: "In Hell We Live, Lament",
		artist: "Mili",
		cover: inHellWeLiveLamentCover,
		url: "assets/music/url/in-hell-we-live-lament.mp3",
		duration: 225,
	},
	{
		id: 4,
		title: "SAIKAI",
		artist: "Mili",
		cover: saikaiCover,
		url: "assets/music/url/saikai.mp3",
		duration: 324,
	},
	{
		id: 5,
		title: "Through Patches of Violet",
		artist: "Mili",
		cover: throughPatchesOfVioletCover,
		url: "assets/music/url/through-patches-of-violet.mp3",
		duration: 233,
	},
	{
		id: 6,
		title: "TIAN TIAN",
		artist: "Mili",
		cover: tianTianCover,
		url: "assets/music/url/tian-tian.mp3",
		duration: 254,
	},
	{
		id: 7,
		title: "怪獣",
		artist: "sakanaction",
		cover: kaijuCover,
		url: "assets/music/url/kaiju.mp3",
		duration: 289,
	},
];

export const DEFAULT_SONG: Song = {
	title: "Sample Song",
	artist: "Sample Artist",
	cover: DEFAULT_COVER_URL,
	url: "",
	duration: 0,
	id: 0,
};

export const DEFAULT_METING_API =
	"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r";
export const DEFAULT_METING_ID = "14164869977";
export const DEFAULT_METING_SERVER = "netease";
export const DEFAULT_METING_TYPE = "playlist";

export const ERROR_DISPLAY_DURATION = 3000;
export const SKIP_ERROR_DELAY = 1000;
