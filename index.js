var express = require("express") 
var  mysql = require("mysql")
var  connetion =require("./database")
var app=express()

app.get("/",function(req,res){
    let sql="select*from employeesdata"
    connetion.query(sql,function(err,results){
        if(err)throw err
        console.log(results);
        res.send(results)
    })
})

app.listen(3001,function(){
    console.log("App is listening")
    connetion.connect(function(err){
        if(err) throw err;
        console.log("connected")
    })
})