const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://pranav:pranav@pranav.35ydd3y.mongodb.net/?retryWrites=true&w=majority&appName=Pranav")

const db = mongoose.connection

db.on("connected",(err)=>{
    if(err){
        console.log("DB not connected")
    }else{
        console.log("DB connected")
    }
})

module.exports = db