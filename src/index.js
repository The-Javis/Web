const express = require("express");
const rp = require("request-promise");
const app = express();

rp('https://randomuser.me/api/')
.then(function (htmlString) {
    console.log(JSON.parse(htmlString));
})
.catch(function (err) {
    console.log(err);
});
