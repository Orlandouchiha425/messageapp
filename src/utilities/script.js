import {useState,useEffect } from 'react'
import socket from ('socket.io')

let socket;
let usernameInput
let chatIDInput;
let messageInput;
let chatRoom;
let messages = [];

function onload(){
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
        setMessages(...message);

    }
    else{
        
    }
})