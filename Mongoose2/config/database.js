const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:admin@crud.nqc4xzp.mongodb.net/?retryWrites=true&w=majority&appName=CRUD")

const db = mongoose.connection

db.on("connected",(err)=>{
    if(err){
        console.log("DB not connected")
    }else{
        console.log("DB connected")
    }
})

module.exports = db