var { split, sep } = require("./base.js");
var fs = require("fs");

var mkdir = function (path) {
	var dirs,exist;
	if(typeof path=='string') {
		dirs = split(path);
	} else {
		dirs = [...path];
	}

	dirs.reduce((prev,next)=>{
		exist = fs.existsSync(prev+next);
		if(!exist||(!fs.statSync(prev+next).isDirectory())) {
			fs.mkdirSync(prev+next);
		}
		return prev+next+sep;
	},"\."+sep);

	return dirs.join(sep)
};

module.exports = mkdir