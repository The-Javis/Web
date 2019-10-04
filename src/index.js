const express = require("express");
const rp = require("request-promise");
const app = express();

async function html(){
    var page = await rp("https://randomuser.me/api/")
    .then(function(html){
        return html;
    })
    .catch(function(err){
        return err;
    })
    console.log(page);
}

app.get("/",function(req,res){
    res.json({
        page:html()
    });
    res.end();
});

app.listen(8000,function(){
    console.log("run");
});
/*

*/
