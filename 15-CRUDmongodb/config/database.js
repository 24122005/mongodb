const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://krishna:krishna@crud.uhktqg6.mongodb.net/?retryWrites=true&w=majority&appName=CRUD')

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