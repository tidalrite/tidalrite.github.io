import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { describe, it } from "node:test";
import vm from "node:vm";

const componentSource = await readFile(
	new URL("../src/components/misc/FullscreenWallpaper.astro", import.meta.url),
	"utf8",
);
const runtimeScript = [
	...componentSource.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g),
]
	.map((match) => match[1])
	.find((script) =>
		script.includes("function initFullscreenWallpaperCarousel"),
	);
assert.ok(runtimeScript, "fullscreen wallpaper runtime script exists");

class FakeImage {
	constructor() {
		this.complete = false;
		this.naturalWidth = 0;
		this.loading = "lazy";
		this.listeners = new Map();
		this.attributes = new Set(["src"]);
	}
	addEventListener(type, listener) {
		if (!this.listeners.has(type)) this.listeners.set(type, new Set());
		this.listeners.get(type).add(listener);
	}
	removeEventListener(type, listener) {
		this.listeners.get(type)?.delete(listener);
	}
	removeAttribute(name) {
		this.attributes.delete(name);
	}
	decode() {
		return Promise.resolve();
	}
	emit(type) {
		for (const listener of this.listeners.get(type) ?? [])
			listener.call(this, { type, target: this });
	}
	load() {
		this.complete = true;
		this.naturalWidth = 1600;
		this.emit("load");
	}
	fail() {
		this.complete = true;
		this.naturalWidth = 0;
		this.emit("error");
	}
}

class FakeFragment {
	constructor() {
		this.images = [new FakeImage(), new FakeImage()];
	}
	cloneNode() {
		return new FakeFragment();
	}
	querySelectorAll(selector) {
		return selector === "img" ? this.images : [];
	}
}

class FakeFrame {
	constructor() {
		this.className = "";
		this.style = {};
		this.images = [];
		this.parent = null;
	}
	appendChild(fragment) {
		this.images.push(...fragment.images);
	}
	querySelectorAll(selector) {
		return selector === "img" ? this.images : [];
	}
	remove() {
		if (this.parent)
			this.parent.children = this.parent.children.filter(
				(child) => child !== this,
			);
	}
}

class FakeTemplate {
	constructor() {
		this.content = new FakeFragment();
	}
}

class FakeGroup {
	constructor(key, count) {
		this.dataset = { wallpaperGroup: key };
		this.frames = Array.from({ length: count }, () => new FakeTemplate());
		this.children = [];
	}
	querySelectorAll(selector) {
		return selector === "template[data-wallpaper-frame]" ? this.frames : [];
	}
	appendChild(frame) {
		frame.parent = this;
		this.children.push(frame);
		return frame;
	}
}

class FakeRoot {
	constructor(groups) {
		this.groups = groups;
		this.isConnected = true;
		this.style = { display: "" };
	}
	querySelectorAll(selector) {
		return selector === "[data-wallpaper-group]" ? this.groups : [];
	}
}

function createHarness({ mode = "banner", count = 5 } = {}) {
	const groups = [
		new FakeGroup("desktop", count),
		new FakeGroup("mobile", count),
	];
	const root = new FakeRoot(groups);
	const windowListeners = new Map();
	const documentListeners = new Map();
	const timers = new Map();
	const localStorage = new Map([["wallpaperMode", mode]]);
	const sessionStorage = new Map();
	let nextTimerId = 1;
	const mediaQuery = {
		matches: true,
		listeners: new Set(),
		addEventListener(type, listener) {
			if (type === "change") this.listeners.add(listener);
		},
		removeEventListener(type, listener) {
			if (type === "change") this.listeners.delete(listener);
		},
	};
	const addListener = (map, type, listener) => {
		if (!map.has(type)) map.set(type, new Set());
		map.get(type).add(listener);
	};
	const removeListener = (map, type, listener) =>
		map.get(type)?.delete(listener);
	const emit = (map, type, event = {}) => {
		for (const listener of map.get(type) ?? []) listener(event);
	};
	const document = {
		readyState: "complete",
		hidden: false,
		querySelector(selector) {
			return selector === "[data-fullscreen-wallpaper]" ? root : null;
		},
		createElement(tag) {
			assert.equal(tag, "div");
			return new FakeFrame();
		},
		addEventListener: (type, listener) =>
			addListener(documentListeners, type, listener),
		removeEventListener: (type, listener) =>
			removeListener(documentListeners, type, listener),
	};
	const window = {
		__wallpaper_cleanup: null,
		matchMedia: () => mediaQuery,
		addEventListener: (type, listener) =>
			addListener(windowListeners, type, listener),
		removeEventListener: (type, listener) =>
			removeListener(windowListeners, type, listener),
	};
	const context = {
		window,
		document,
		localStorage: { getItem: (key) => localStorage.get(key) ?? null },
		sessionStorage: {
			getItem: (key) => sessionStorage.get(key) ?? null,
			setItem: (key, value) => sessionStorage.set(key, value),
		},
		carouselInterval: 5,
		carouselEnabled: true,
		wallpaperEnabled: true,
		setTimeout(callback, delay) {
			const id = nextTimerId++;
			timers.set(id, { callback, delay });
			return id;
		},
		clearTimeout(id) {
			timers.delete(id);
		},
		console,
	};
	vm.runInNewContext(runtimeScript, context, { timeout: 1000 });
	return {
		root,
		groups,
		timers,
		window,
		document,
		setMode(value) {
			localStorage.set("wallpaperMode", value);
			emit(windowListeners, "wallpaper-mode-change", {
				detail: { mode: value },
			});
		},
		fireTimer(delay) {
			const match = [...timers].find(([, timer]) => timer.delay === delay);
			assert.ok(match, `timer for ${delay}ms exists`);
			const [id, timer] = match;
			timers.delete(id);
			timer.callback();
		},
	};
}

async function flushMicrotasks() {
	for (let index = 0; index < 8; index += 1) await Promise.resolve();
}

function loadFrame(frame) {
	for (const image of frame.images) image.load();
}
function failFrame(frame) {
	frame.images[0].fail();
}

describe("Fullscreen wallpaper carousel lifecycle", () => {
	it("does not mount requests outside overlay mode and waits for decode before revealing", async () => {
		const app = createHarness();
		const desktop = app.groups[0];
		assert.equal(
			desktop.children.length,
			0,
			"banner mode leaves inert templates unmounted",
		);

		app.setMode("overlay");
		assert.equal(
			desktop.children.length,
			1,
			"only the current frame begins loading",
		);
		assert.equal(
			app.groups[1].children.length,
			0,
			"inactive mobile breakpoint remains unmounted",
		);
		app.setMode("overlay");
		assert.equal(
			desktop.children.length,
			1,
			"repeated mode events do not duplicate activation",
		);
		const current = desktop.children[0];
		assert.equal(
			current.style.opacity,
			"0",
			"unloaded current frame stays hidden",
		);
		loadFrame(current);
		await flushMicrotasks();
		assert.equal(
			current.style.opacity,
			"1",
			"current frame appears after both images decode",
		);
		assert.equal(
			desktop.children.length,
			2,
			"only current and next frames are mounted",
		);
		app.window.__wallpaper_cleanup();
	});

	it("keeps the old frame visible until the next one decodes, then crossfades", async () => {
		const app = createHarness({ mode: "overlay" });
		const desktop = app.groups[0];
		const current = desktop.children[0];
		loadFrame(current);
		await flushMicrotasks();
		const next = desktop.children[1];
		app.fireTimer(5000);
		assert.equal(
			current.style.opacity,
			"1",
			"old image remains visible while next is pending",
		);
		assert.equal(next.style.opacity, "0");
		loadFrame(next);
		await flushMicrotasks();
		assert.equal(current.style.opacity, "0");
		assert.equal(next.style.opacity, "1");
		assert.equal(
			desktop.children.length,
			2,
			"transition never mounts an unbounded frame list",
		);
		app.window.__wallpaper_cleanup();
	});

	it("skips a failed initial frame and keeps the successful fallback", async () => {
		const app = createHarness({ mode: "overlay" });
		const desktop = app.groups[0];
		failFrame(desktop.children[0]);
		await flushMicrotasks();
		assert.equal(
			desktop.children.length,
			1,
			"failed frame is removed before trying the next",
		);
		const fallback = desktop.children[0];
		loadFrame(fallback);
		await flushMicrotasks();
		assert.equal(
			fallback.style.opacity,
			"1",
			"fallback is shown only after successful decode",
		);
		assert.equal(
			desktop.children.length,
			2,
			"successful fallback plus one preload only",
		);
		app.window.__wallpaper_cleanup();
	});

	it("cancels pending loads and carousel timers when leaving overlay mode", async () => {
		const app = createHarness({ mode: "overlay" });
		const desktop = app.groups[0];
		assert.equal(desktop.children.length, 1);
		assert.ok([...app.timers.values()].some(({ delay }) => delay === 12000));
		app.setMode("banner");
		await flushMicrotasks();
		assert.equal(
			desktop.children.length,
			0,
			"mounted URLs are removed when overlay closes",
		);
		assert.equal(
			app.timers.size,
			0,
			"pending decode and carousel timers are cleared",
		);
		app.window.__wallpaper_cleanup();
	});
});
