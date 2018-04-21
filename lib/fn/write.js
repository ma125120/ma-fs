var { split, sep } = require("./base.js");
var fs = require("fs");

var write = function(filename,content) {
		var writer = fs.createWriteStream(filename);
		content&&writer.write(content);
};

module.exports = write;