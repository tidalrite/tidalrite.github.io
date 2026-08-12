import type { FullscreenWallpaperConfig } from "../types/config";

// 覆盖 / 全屏壁纸与首页横幅共用同一套图片，避免切换模式后回到模板默认壁纸。
const tidalriteWallpaperImages = [
	"/assets/desktop-banner/tidalrite/5.jpg",
	"/assets/desktop-banner/tidalrite/10.jpg",
	"/assets/desktop-banner/tidalrite/11.jpg",
	"/assets/desktop-banner/tidalrite/15.jpg",
	"/assets/desktop-banner/tidalrite/17.webp",
	"/assets/desktop-banner/tidalrite/18.webp",
	"/assets/desktop-banner/tidalrite/19.webp",
	"/assets/desktop-banner/tidalrite/20.webp",
	"/assets/desktop-banner/tidalrite/22.webp",
	"/assets/desktop-banner/tidalrite/23.webp",
	"/assets/desktop-banner/tidalrite/24.webp",
	"/assets/desktop-banner/tidalrite/25.webp",
	"/assets/desktop-banner/tidalrite/26.webp",
	"/assets/desktop-banner/tidalrite/27.webp",
	"/assets/desktop-banner/tidalrite/28.webp",
	"/assets/desktop-banner/tidalrite/29.webp",
	"/assets/desktop-banner/tidalrite/30.webp",
	"/assets/desktop-banner/tidalrite/31.webp",
	"/assets/desktop-banner/tidalrite/32.webp",
	"/assets/desktop-banner/tidalrite/33.webp",
	"/assets/desktop-banner/tidalrite/34.webp",
	"/assets/desktop-banner/tidalrite/35.webp",
	"/assets/desktop-banner/tidalrite/36.webp",
	"/assets/desktop-banner/tidalrite/37.webp",
	"/assets/desktop-banner/tidalrite/wechat-01.jpg",
	"/assets/desktop-banner/tidalrite/wechat-02.jpg",
	"/assets/desktop-banner/tidalrite/wechat-03.jpg",
	"/assets/desktop-banner/tidalrite/wechat-04.jpg",
	"/assets/desktop-banner/tidalrite/wechat-05.jpg",
	"/assets/desktop-banner/tidalrite/wechat-06.png",
	"/assets/desktop-banner/tidalrite/wechat-07.jpg",
	"/assets/desktop-banner/tidalrite/wechat-08.jpg",
	"/assets/desktop-banner/tidalrite/wechat-09.jpg",
	"/assets/desktop-banner/tidalrite/wechat-10.jpg",
	"/assets/desktop-banner/tidalrite/wechat-11.jpg",
];

export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
	enable: true,
	src: {
		desktop: tidalriteWallpaperImages,
		mobile: tidalriteWallpaperImages,
	},
	position: "center",
	carousel: {
		enable: true,
		interval: 5,
	},
	zIndex: -1,
	opacity: 0.8,
	blur: 1,
	switchable: true,
	overlay: {
		opacity: 0.8, // 壁纸不透明度，0-1
		blur: 1.5, // 背景模糊半径（px）
		cardOpacity: 0.8, // 卡片不透明度，0-1
		switchable: {
			opacity: true,
			blur: true,
			cardOpacity: true,
		},
	},
	fullscreen: {
		switchable: {
			opacity: true,
			blur: true,
		},
	},
};
