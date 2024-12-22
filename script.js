const express = require("express");
const app = express();


 //this is called middle ware it takes three parameters re res and next 
// app.use(function (req,res, next){
//     next()
// })
app.get("/", function(req,res){
    res.send ("hello world")
})
app.get("/profile/: username", function(req,res){
    res.send (`hello world ${req.params.username}`);
})
app.listen(3000)