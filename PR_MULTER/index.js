const express = require('express')

const port = 4343

const app = express()
const path = require("path")
const multer = require("multer")
const fs = require('fs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'Images')    
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage })
  
  app.set("view engine" , 'ejs')

  app.use(express.urlencoded({extended : true}))
  app.use("/Images",express.static(path.join(__dirname,"Images")))

  app.get("/upload",(req , res)=>{
    res.render("upload" , {imagePath : null})
  })

  app.post("/upload",upload.single('image'),(req , res)=>{
    if(req.file){
      const imagePath = "/Images/"+ req.file.filename
      res.render("upload",{imagePath : imagePath})
    }else{
      res.render("upload",{imagePath : null})
    }
    res.send("Done")
  })

  app.post("/delete",(req , res)=>{
    const imagePath = req.body.imagePath
    const absolutePath = path.join(__dirname , imagePath)

    fs.unlink(absolutePath , (err)=>{
      if(err){
        console.log("Cannot delete file")
      }else{
        console.log("Image Deleted")
      }
      res.render('upload',{imagePath : null})
    })
  })
  app.get("/edit", (req, res) => {
    const imagePath = req.query.imagePath;
    res.render("edit", { imagePath: imagePath });
});

app.post("/edit", upload.single('newImage'), (req, res) => {
    const oldImagePath = req.body.oldImagePath;
    const absolutePath = path.join(__dirname, oldImagePath);

    if (req.file) {
        const newImagePath = "/Images/" + req.file.filename;

        // Delete the old image file
        fs.unlink(absolutePath, (err) => {
            if (err) {
                console.log("Cannot delete file");
            } else {
                console.log("Image Deleted");
            }
        });

        // Render the upload page with the new image path
        res.render("upload", { imagePath: newImagePath });
    } else {
        res.render("edit", { imagePath: oldImagePath });
    }
});


  app.listen(port , (req , res)=>{
    console.log("App listending at " , port)
  })