//  import { useRef } from "react";
// const NameInput=useRef(null) 
// const IDInput=useRef(null)
// const ComposedMessage=useRef(null)
// const RoomID=useRef(null)
// const Ding=useRef(null)
//  const Message=useRef(null)
// // const socket=require('socket.io')

//     var socket;
//     var usernameInput
//     var chatIDInput;
//     var messageInput;
//     var chatRoom;
//     // var dingSound;
//     var messages = [];
//     var delay = true;
// export default function Scripts(){

//  function onload(){

//     socket=io();




//     socket.on("join",function(room){
//         chatRoom.dangerouslySetInnerHTML=`Chatroom : ${room}`
//     }) 
//     socket.on("receive", function(message){
//         console.log(message)
//         if(messages.length<9){
//             messages.push(message);
//             // dingSound.currentTime=0;
//             // dingSound.play();
//         }
//         else{
//             messages.shift();
//             messages.push(message)
//         }
//         for (i=0;i<messages.length;i++){
//             ({Message}+i).dangerouslySetInnerHTML=messages[i];
//             {message}
           
//         }
//     })

// }


// function Connect(){
//     socket.emit("join", chatIDInput.value, usernameInput.value)
// }


//     function send(){
//     if(delay && messageInput.value.replace(/\s/g,"") !=""){
//         delay=false;
//         setTimeout(delayReset,1000);
//         socket.emit("send", messageInput.value);
//         messageInput.value="";
//     }
// }

// function delayReset(){
//     delay = true;
//   }

// }