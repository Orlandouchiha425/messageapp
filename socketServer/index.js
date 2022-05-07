const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const path = require("path");
const cors=require('cors')
const logger = require('morgan');

port=3005;
const app = express();
const httpserver = http.Server(app);
const io = socketio(httpserver);
app.use(cors())


// app.use(express.static(gamedirectory));
app.use(logger('dev'));

var rooms = [];
var usernames = [];

io.on('connection', function(socket){

  socket.on("join", function(room, username){
    if (username != ""){
      rooms[socket.id] = room;
      usernames[socket.id] = username;
      socket.leaveAll();
      socket.join(room);
      io.in(room).emit("recieve", "Server : " + username + " has entered the chat.");
      socket.emit("join", room);
    }
  })

  socket.on("send", function(message){
    io.in(rooms[socket.id]).emit("recieve", usernames[socket.id] +" : " + message);
  })

  socket.on("recieve", function(message){
    socket.emit("recieve", message);
  })
})



httpserver.listen(port,function(){
    console.log(`Socket is running on port ${port}`)

});

