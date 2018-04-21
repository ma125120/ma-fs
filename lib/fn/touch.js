var { split, sep } = require("./base.js");
var fs = require("fs");

var write = require("./write.js");
var mkdir = require("./mkdir.js");

var touch = function(filename,content,rewrite=false) {
	var path = split(filename),
			file = path.pop();
	mkdir(path);

	var writer;
	if(rewrite || !fs.existsSync(filename)) {
			//重写文件
		write(filename,content)
	}
};

module.exports = touch