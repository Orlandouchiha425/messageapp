import { useState,useEffect } from "react"

import { io } from "socket.io-client"
const socket = io("https://localhost:3005");


// import styles from "./MessageBoard.module.css"




export default function MessageBoard(){
  const [chatRoom, setChatroom] = useState({
    ChatRoom: " "
      })

  const [messages, setMessages] = useState([])
  const [text,setText]=useState("")


  useEffect(() => {
    socket.io()

    socket.on("join",function(room){
    setChatroom({...chatRoom,["ChatRoom"]:room})

    socket.on("receive",function(message){
      console.log(message);
    if(messages.length<9){
      setMessages(...message,message)
    }else{
      setMessages(delete(message));
      setMessages(...messages,message)
    }
    for (i=0;i<messages.length;i++){
      setText()
    }

    })

    })
  },[])



  



  
    return (


      <form>
      <div className="form-row ">
        <label > Username  </label>
        <input placeholder="type your username..." className="form-control " type = "text"/>
        <label > Chatroom </label>
        <input placeholder="select a room..." className = "form-control "  type = "text"/>
        
        <input className="btn btn-primary" type = "submit" value = "Connect" onclick = "Connect()"/>
        {messages.length && messageList}
 
       
      </div>
      </form>
    );
  };



