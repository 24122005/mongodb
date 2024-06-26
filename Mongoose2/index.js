
const express = require('express')

const port = 4040

const app = express()


const db = require("./config/database")
app.set('view engine','ejs')
const adminTable = require('./model/adminTable')

app.use(express.urlencoded())
app.get('/',(req,res)=>{
    
   return res.render('form')
})
app.post('/insertData',(req,res)=>{
    const{name , email , password} = req.body
    adminTable.create({
        name : name,
        email : email,
        password : password
    }).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
})
app.listen(port,(err)=>{
    if(err){
        console.log("Server not started")
    }else{
        console.log("Server started at : " + port)
    }
})