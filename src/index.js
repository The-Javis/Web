const express = require("express");
const rp = require("request-promise");
const app = express();

app.get("/",function(req,res){
    res.json({});
    res.end();
});

app.listen(8000,function(){
    console.log("run");
});
/*

*/
