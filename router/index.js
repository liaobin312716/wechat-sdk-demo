exports.init = function (app) {
	var wechat_cfg = require('../config/wechat.cfg');
	var http = require('http');
	var cache = require('memory-cache');
	var sha1 = require('sha1'); //签名算法
	//var url = require('url');
	var signature = require('../sign/signature');

	
	app.get('/',function(req,res){
		var url = req.protocol + '://' + req.host + req.path; //获取当前url
		signature.sign(url,function(signatureMap){
			signatureMap.appId = wechat_cfg.appid;
			res.render('index',signatureMap);
		});
	});

};