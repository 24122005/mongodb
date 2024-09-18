const express = require('express')
const port  = 8000

const app = express()

const db = require('./config/database.js')
const adminTable = require ('./model/admindata')

app.set('view engine' , 'ejs')

app.use(express.urlencoded({ extended: true }))

app.get('/' , (req,res)=>{
  res.render('bookStore')
})

app.get('/bookform' , (req,res)=> {
    res.render('bookForm')
})

app.get('/bookdata' , (req,res)=>{
    // res.render('bookData')
    adminTable.find({}).then((allData)=>{
        return res.render('bookData',{
          
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
        return res.redirect('/bookData')
    }).catch((err)=>{
        console.log(err)
    })
})

app.post('/insertData',(req,res)=>{
    const {fname,lname,username,city,zip} = req.body
   console.log(fname,lname,"abcd")
    adminTable.create({
       fname:fname,
       lname:lname,
       username:username,
       city:city,
       zip:zip
    }).then((data)=>{
     
        console.log(data)
        // return res.redirect('/')
        res.send(data)
    }).catch((err)=>{
        console.log(err)
    })
})

app.listen(port,(err)=>{
    if(err){
        console.log("Server Not Found!!")
    }
    else{
        console.log("Server Found at:",port)
    }
})