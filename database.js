var mysql =require("mysql")


var connetion =mysql.createConnection({
    host:"localhost",
    database:"meetproject",
    user:"root",
    password:"password",
})

module.exports=connetion