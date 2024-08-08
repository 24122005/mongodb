const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://bookstore:bookstore@bookstore.7vzvhjn.mongodb.net/?retryWrites=true&w=majority&appName=BookStore')


const db = mongoose.connection

db.on("connected",(err)=>{
    if(err){
        console.log("DB not connected")
    }
    else{
        console.log("DB connected")
    }
})

module.exports = db