var { split, sep, getLastDir } = require("./base.js");
var fs = require("fs");

var remove = function(path) {
	_remove(path,path);
	if(fs.existsSync(path)) {
		fs.rmdirSync(path);
	}
};
var isType = function(path) {
	var type = "";
	if(fs.existsSync(path)) {
		var stats = fs.statSync(path);
		if(stats.isDirectory()) {
			type = 'dir'
		} else if(stats.isFile()){
			type = 'file'
		} else {
			type = false;
		}
	}
	return type;
}
var mapDir = function(path,root) {
	var infos = fs.readdirSync(path),
			allPath;
	if(infos.length == 0) {
		fs.rmdirSync(path);
	} else {
		infos.map((info,index)=>{
			allPath = path + sep + info;
			_remove(allPath,root,function() {
				mapDir(path+sep,root);
			})
		})
	}
}

var _remove = function(path,root,cb) {
	var type = isType(path);
	switch(type) {
		case 'dir':
			mapDir(path,root);
			break;
		case 'file':
			fs.unlinkSync(path);
			cb&&cb();
			break;
		default:
			return false;
	}
}

module.exports = remove