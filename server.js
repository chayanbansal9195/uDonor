var express= require('express')
var ejs = require('ejs')
var db= require('./routes/database')
var bodyParser = require("body-parser");
var morgan = require("morgan")


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine','ejs')
app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'));
app.use('/img', express.static('img'))



app.get('/google',(req,res)=>{
    res.render('google')
})

//leaderboard
app.get('/leaderboard',(req,res)=>{
    db.query("select * from leaderboard order by Credits desc",(err,results)=>{
        res.render('leaderboard',{
            data:results
        })
        
    })
   
})

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/ngo',(req,res)=>{
    res.render('ngo')
})

app.get('/books',(req,res)=>{
    res.render('books')
})
app.get('/proceed',(req,res)=>{
    res.render('proceed')
})
app.get('/proceed1',(req,res)=>{
    res.render('proceed1')
})



app.get('/paid',(req,res)=>{
    res.render('paid')
})

app.get('/food',(req,res)=>{
    res.render('food')
})


app.get('/thank',(req,res)=>{
    res.render('thank')
})
app.get('/process',(req,res)=>{
    res.render('payment')
})

app.listen(3000,(err)=>{
    if(err)
    console.log(err)
    else
    console.log("connected")
})