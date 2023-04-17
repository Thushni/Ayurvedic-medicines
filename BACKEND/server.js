const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require('multer');
const cors = require("cors");

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
});

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("Mongodb Connection Success!");
})

const productRouter = require("./routes/product.js");






app.use("/Product",productRouter);


// Define the storage for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname))
    }
  });
  
  // Set up multer
  const upload = multer({ storage: storage });
  
  // Set up the route for uploading images
  app.post('/upload', upload.single('image'), (req, res) => {
    res.json({ filename: req.file.filename });
  });

  
app.listen(PORT, () => {
    console.log(`Server is up and running on port number:${PORT}`)
    
})