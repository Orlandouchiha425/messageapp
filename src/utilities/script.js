import { useRef } from "react";

export default function Script(){
    const NameInput=useRef(null) 
   const IDInput=useRef(null)
   const ComposedMessage=useRef(null)
   const RoomID=useRef(null)
   const notification=useRef(null)
    const Message=useRef(null)

    var socket;
    var usernameInput
    var chatIDInput;
    var chatRoom;
    var dingSound
 function onload(){

    socket=io();
    usernameInput=NameInput.current.value
        }



    socket.on("join",function(room){
        chatRoom.dangerouslySetInnerHTML=`Chatroom : ${room}`
    }) 
    socket.on("receive", function(message){
        console.log(message)
        if(messages.length<9){
            messages.push(message);
            notification.currentTime=0;
            notification.play();
        }
        else{
            messages.shift();
            messages.push(message)
        }
        for (i=0;i<messages.length;i++){
            ({Message}+i).dangerouslySetInnerHTML=messages[i]
           
        }
    })

}


