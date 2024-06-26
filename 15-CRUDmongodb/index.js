const express = require('express')
const port = 8080
const app = express()

const db = require('./config/database.js')
const adminTable = require ('./model/adminTable')

app.set('view engine' , 'ejs')
app.use(express.urlencoded())
app.get('/', (req,res)=>{
//  res.render('form')
    adminTable.find({}).then((allData)=>{
    return res.render('form',{
        record : allData
    })
    }).catch((err)=>{
    console.log(err)
    })
    
})



app.get('/deleteData/:id',(req,res)=>{
    let id = req.params.id
    adminTable.findByIdAndDelete(id)
    .then((data)=>{
        return res.redirect('/')
    }).catch((err)=>{
        console.log(err)
    })
})

app.post('/insertData',(req,res)=>{
    const {username,password} = req.body

    adminTable.create({
        username:username,
        password:password
    }).then((data)=>{
     
        console.log(data)
       return res.redirect('/')
    }).catch((err)=>{
        console.log(err)
    })
})

app.listen(port,(err)=>{
    if(err){
        console.log("server not connected")
    }
    else{
        console.log("server connected")
    }
})