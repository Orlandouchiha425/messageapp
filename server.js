require('dotenv').config();
require('./config/database');


const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const multer  = require('multer')

const app = express();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './multerimages')
//   },
//   filename: function (req, file, cb) {
//     const imageHandler = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, file.fieldname + '-' + imageHandler)
//   }
// })

// const upload = multer({ storage: storage })

// app.post('/single', (req,res)=)
// app.post('/profile', upload.single('avatar'), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
// })

// app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
//   // req.files is array of `photos` files
//   // req.body will contain the text fields, if there were any
// })

// const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
// app.post('/cool-profile', cpUpload, function (req, res, next) {
//   // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
//   //
//   // e.g.
//   //  req.files['avatar'][0] -> File
//   //  req.files['gallery'] -> Array
//   //
//   // req.body will contain the text fields, if there were any
// })



app.use(logger('dev'));
// there's no need to mount express.urlencoded middleware
// why is that?
app.use(express.json());
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Check if token and create req.user
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));


// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



// io.on("connection", (socket) => {
//   console.log(socket.id); // ojIckSD2jqNzOqIrAGzL
// });



// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});