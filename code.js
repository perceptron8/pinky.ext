"use strict";

var collectibles = new Set(collectibles);
var magenta = decodeURI(magenta);

magenta = chrome.extension.getURL("magenta.png");

var slice = function(str, sep) {
	var index = str.lastIndexOf(sep);
	return index >= 0 ? str.slice(index + sep.length) : "";
};

var callback = function(details) {
	var resource = slice(details.url, "/");
	if (collectibles.has(resource)) {
		return { "redirectUrl": magenta };
	}
};

var filter = { "urls": ["http://*/*.png"], "types": ["other"] };
var options = ["blocking"];

chrome.webRequest.onBeforeRequest.addListener(
	callback,
	filter,
	options
);
