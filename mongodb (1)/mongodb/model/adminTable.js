const mongoose = require('mongoose')
const adminSchema  = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
})
const pranav = mongoose.model('pranav',adminSchema)
module.exports = pranav