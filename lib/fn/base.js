const path = require("path");
const sep = path.sep;

var split=function (path) {
	var path = path.replace(/\//g,sep);
	var dirs = path.split(sep),
			first;

	if(dirs[0][0]=='\.' || dirs[0] == '') {
		dirs[0] = "\."+sep;
	}
	return dirs;
}
var	getLastDir = function(path) {
	return split(path).slice(0,-1);
}

module.exports = {
	split,
	sep,
	getLastDir,
}
