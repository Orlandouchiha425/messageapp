import {useState,useEffect } from 'react'
import socket from ('socket.io')

let socket;
let usernameInput
let chatIDInput;
let messageInput;
let chatRoom;
let messages = [];

function onload(){
    socket.io()
    const [chatRoom,setChatroom]=useState("")
    
socket.on("join",function(room){
    setChatroom(...chatRoom,chatRoom)= `ChatRoom: ${room}`

})
}

useEffect(()=>{
onload()

},[])


socket.on("receive",function(message){
const [messages,setMessages]=useState([])
    console.log(message);
    if (messages.length<9){
        setMessages(...messages);

    }
    else{

    }
})



// function onload(){
//     socket = io();
//     usernameInput = document.getElementById("NameInput");
//     chatIDInput = document.getElementById("IDInput");
//     messageInput = document.getElementById("ComposedMessage");
//     chatRoom = document.getElementById("RoomID");
//     dingSound = document.getElementById("Ding");
  
//     socket.on("join", function(room){
//       chatRoom.innerHTML = "Chatroom : " + room;
//     })
  
//     socket.on("recieve", function(message){
//       console.log(message);
//       if (messages.length < 9){
//         messages.push(message);
//         dingSound.currentTime = 0;
//         dingSound.play();
//       }
//       else{
//         messages.shift();
//         messages.push(message);
//       }
//       for (i = 0; i < messages.length; i++){
//           document.getElementById("Message"+i).innerHTML = messages[i];
//           document.getElementById("Message"+i).style.color = "#303030";
//       }
//     })
//   }