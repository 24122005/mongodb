const exp = require('constants')
const express = require('express')

const port = 3030

const app = express()

const db = require("./config/database")

app.listen(port,(err)=>{
    if(err){
        console.log("Server not started")
    }else{
        console.log("Server started at : " + port)
    }
})