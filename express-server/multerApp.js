const multer = require('multer');
const path = require('path');
const cors = require('cors');

const express = require('express');
const app = express();
app.use(cors());

const stoarge = multer.diskStorage({
  destination : function(req, file, cb){
    cb(null, 'uploads/');
  },
  filename : function(req, file, cb){
    let savedFile = (new Date().valueOf() + path.basename(file.originalname));
    cb(null, savedFile);
  }
});

const upload = multer({storage : stoarge});

app.listen(5000, () => {
  console.log('sever start');
})

app.post('/profile', upload.single('avatar'), (req, res) => {
  console.log(req.file);
  console.log(req.body);

});

app.post('/photos', upload.array('photos', 12), (req, res) => {
  for(let file of req.files){
  console.log(file);
  }
});