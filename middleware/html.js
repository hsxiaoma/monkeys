/**
 * fileoverview 访问html
 * author: zhenn
 */

var path = require('path');
var fs = require('fs'); 
var _ = require('../lib/underscore');
var thunkify = require('thunkify');
var htmlFilter = require('../core/htmlFilter');
var filetool = require('../lib/filetool');
var cssFilter = require('../core/cssFilter');

module.exports = function(cssize) {

	return function *(next) {
	
		// 如果是访问html时，或略src目录
			
		if (this.file) {
			if (this.file.type == 'html') {
				var content = yield thunkify(fs.readFile)( this.localPath , 'utf-8');
				content = htmlFilter.replaceVersion(content , '@@version' , 'src');
				// content = htmlFilter.addFixContent(content);
				content = cssFilter.changePxToRem(content , cssize);
				this.body = content;
			}
		} else {

			if (path.extname(this.localPath) == '.html' && this.localPath.indexOf('/src/') == -1) {
				var cwd = process.cwd();
				var relativePath = this.localPath.replace(cwd , '');
				var itemArr = relativePath.split('/');
				itemArr.splice(2 , 0 , 'src');
				var localPath = cwd + itemArr.join('/');
				
				if(filetool.isFile(localPath)) {
					var content = yield thunkify(fs.readFile)(localPath , 'utf-8');
					content = htmlFilter.replaceVersion(content , '@@version' , 'src');
					// content = htmlFilter.addFixContent(content);
					content = cssFilter.changePxToRem(content , cssize);
					this.body = content;
				}
			}
		}
		

		

		yield next;
	}

};


