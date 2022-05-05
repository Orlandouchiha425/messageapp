import { useState,useEffect } from "react"

import { io } from "socket.io-client"
const socket = io("https://localhost:3005");






export default function MessageBoard(){
  const [chatRoom, setChatroom] = useState({
    ChatRoom: " "
      })

  const [messages, setMessages] = useState([])
  const [text, setText]=useState("")
  const [chatId, setChatId]=useState({Room1:" "})
  const [userNameInput, setUserNameInput]=useState({UserName:" "})
  const [messageInput,setMessageInput]=useState("")

    let delay=true;
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
      setText(...text,[i])
    }


    })

    })
  },[])


  function Connect(value){
    socket.emit("join", setChatId({...chatId,["chatId"]:value}), setUserNameInput({...userNameInput,["UserName"]:value})
    )
  }



function Send(){
  if (delay && setMessageInput(...messageInput,messageInput.value.replace(/\s/g,"") !="")){
    delay = false;
    setTimeout(delayReset, 1000);
    socket.emit("send", messageInput.value);
    messageInput.value = "";
  }
}

function delayReset(){
  delay = true;
}
  



  
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



