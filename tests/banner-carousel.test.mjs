import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { describe, it } from "node:test";

const source = await readFile(
	new URL("../src/components/layout/Banner.astro", import.meta.url),
	"utf8",
);
const scriptStart = source.indexOf("<script is:inline data-swup-ignore-script>");
const scriptEnd = source.indexOf("</script>", scriptStart);
const carouselScript = source.slice(scriptStart, scriptEnd);

describe("Banner carousel image safety", () => {
	it("keeps the server-rendered first frame until the next carousel tick", () => {
		assert.match(carouselScript, /window\.__bannerCarouselIndex = \{\s*mobile: 0,\s*desktop: 0/);
		assert.match(carouselScript, /shuffledIndices\(mobileCount, 0\)/);
		assert.match(carouselScript, /shuffledIndices\(desktopCount, 0\)/);
		assert.doesNotMatch(carouselScript, /slot\.innerHTML\s*=\s*frames\[/);
	});

	it("waits for the selected non-data source and decoded eager images", () => {
		assert.match(carouselScript, /image\.loading = 'eager'/);
		assert.match(carouselScript, /image\.currentSrc[\s\S]*!\/\^data:\/i/);
		assert.match(carouselScript, /requestAnimationFrame\(function\(\)\s*\{\s*requestAnimationFrame\(verifyLoadedImage\)/);
		assert.match(carouselScript, /image\.decode\(\)\.then\(onThisImageReady, onImageFailure\)/);
		assert.match(carouselScript, /window\.__bannerCarouselIndex\[type\] = targetIndex/);
	});

	it("retains the old frame on load failure or timeout and skips failed indices", () => {
		assert.match(carouselScript, /markIndexFailed\(type, targetIndex\);\s*discardCandidate\(\)/);
		assert.match(carouselScript, /setTimeout\(function\(\)\s*\{\s*markIndexFailed\(type, targetIndex\)/);
		assert.match(carouselScript, /failed\.indexOf\(candidateIndex\) === -1/);
		assert.match(carouselScript, /if \(newSlot\.parentNode\) newSlot\.parentNode\.removeChild\(newSlot\)/);
	});

	it("does not request hidden or currently inactive slots", () => {
		assert.match(carouselScript, /document\.body\.classList\.contains\('no-banner-mode'\)/);
		assert.match(carouselScript, /wrapper\.classList\.contains\('mobile-hide-banner'\)/);
		assert.match(carouselScript, /function crossfade\(slotClass, totalCount, type\)\s*\{\s*if \(isCrossfading\[type\]\) return/);
		assert.match(carouselScript, /if \(!slot \|\| isSlotHiddenByBreakpoint\(slot\)\) return/);
	});
});
