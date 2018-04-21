
const mkdir = require("./fn/mkdir.js");
const remove = require("./fn/remove.js");
const touch = require("./fn/touch.js");
const write = require("./fn/write.js");

var fs1 = {
	mkdir,
	remove,
	touch,
	write
}

module.exports = fs1;