var mysql = require('mysql')

var conn=mysql.createConnection({
    hostname:'localhost',
    password:"",
    user:"root",
    database:"udonor"
})
conn.connect((err)=>{
    if(err)
    throw err
    else
    console.log("db connected");
})
module.exports=conn