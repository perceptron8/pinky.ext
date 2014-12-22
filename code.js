"use strict";

var collectibles = new Set(collectibles);
var magenta = decodeURI(magenta);

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

var filter = { "urls": ["http://*/*.png"] };
var options = ["blocking"];

chrome.webRequest.onBeforeRequest.addListener(
	callback,
	filter,
	options
);
