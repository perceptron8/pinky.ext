import * as live from "./data/live.js";
import * as prestaging from "./data/prestaging.js";

const modules = [live, prestaging];

for (const module of modules) {
	for (const base of module.bases) {
		const callback = details => ({"redirectUrl": base + module.replacement});
		const filter = {"urls": module.collectibles.map(collectible => base + collectible)};
		chrome.webRequest.onBeforeRequest.addListener(callback, filter, ["blocking"]);
	}
}
