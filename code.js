"use strict";

var collectibles = new Set(collectibles);

var slice = function(str, sep) {
	var index = str.lastIndexOf(sep);
	return index >= 0 ? str.slice(index + sep.length) : "";
};

var callback = function(details) {
	var otherType = details.type == "other";
	var objectType = details.type == "object";
	if (otherType || objectType) {
		var resource = slice(details.url, "/");
		if (collectibles.has(resource)) {
			return { "redirectUrl": replacement };
		}
	}
};

var filter = {"urls": ["http://*/*.png"]};
var options = ["blocking"];

chrome.webRequest.onBeforeRequest.addListener(
	callback,
	filter,
	options
);
