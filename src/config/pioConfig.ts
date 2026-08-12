import type { PioConfig } from "../types/config";

// Pio 看板娘配置
export const pioConfig: PioConfig = {
	enable: true, // 启用看板娘
	models: [
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/rem/model.json",
	], // Rem（远程模型入口）
	position: "left", // 模型位置
	width: 280, // 默认宽度
	height: 250, // 默认高度
	mode: "draggable", // 默认为可拖拽模式
	hiddenOnMobile: true, // 默认在移动设备上隐藏
	hideAboutMenu: false, // 隐藏内置 About 菜单按钮
	dialog: {
		welcome: "欢迎来到汐雩的小站", // 欢迎词
		touch: [
			"想不开的人，到底是想不开，还是想开了。",
			"于暴雨中行走，伞是倒映在天空的船。",
			"如果你现在死了，那么你以后就不用死了。",
			"我是不是小时候的自己，留在这个世上的遗物。",
			"夜里很安静，我打开录音机录了下来，等吵闹的时候再播放。",
			"工人罢了工，所以成了人。",
			"为了不留下遗憾，我带着遗憾离开了那个地方。",
			"我租下了整个世界，直到我死去那天。",
			"有的人看不到未来，其实是看到了未来。",
			"少年拥有时间，时间带走少年。",
			"如果我觉得自己是自由的，那么是否自由也束缚了我。",
			"我失去光明的同时，也征服了太阳。",
			"我是孤独大赛的第一名，也是最后一名。",
			"我们是正在活着，还是正在死亡？",
			"鱼被凌迟叫鱼生，人被凌迟叫人生。",
			"这场手术很成功，我失败的人生结束了。",
		], // 触摸提示
		home: "Click here to go back to homepage!", // 首页提示
		skin: ["Want to see my new outfit?", "The new outfit looks great~"], // 换装提示
		close: "QWQ See you next time~", // 关闭提示
		link: "https://github.com/LyraVoid/Mizuki", // 关于链接
	},
};
