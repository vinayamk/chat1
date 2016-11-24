

console.log("ss");

var express = require("express");

var app  = express();
app.get('/',function(req,res){
	res.send("ssssssss");
	
});
app.listen(3000,function(req,res){
	console.log("ss1");
	
});