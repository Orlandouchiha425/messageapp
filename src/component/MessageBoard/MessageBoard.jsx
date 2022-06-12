
import { Link } from "react-router-dom";

import UserLogOut from "../UserLogOut/UserLogOut";
import NavBar from "../NavBar/NavBar";

import { useState,useEffect } from "react"

import { io } from "socket.io-client"
const socket = io.connect('http://localhost:3003')



export default function MessageBoard({user,setUser}){
  const [userName, setUserName]=useState('')
  const [room, setRoom] = useState('')
const [message, setMessage] = useState({
  content:''
})
const [messageReceived, setMessageReceived] = useState("")


const joinRoom= () => {
  if ( room !== ""){
    socket.emit("join_room", room);
  }
}




  const sendMessage = () => {
    
    socket.emit("send_message", {message,room,userName })
  }

  useEffect(()  => {
    socket.on("receive_message",(data) => {
setMessageReceived( data.message )
setUserName(data.userName)
 })

  }, [socket])
  


  
    return (
      <>
      <NavBar />
        
   <UserLogOut user={user} setUser={setUser} />
      <div className="App">

      <input placeholder='Name' onChange={(evt) => {
        setUserName(evt.target.value)
      }} />


      <input placeholder='room number...' onChange={(evt) => {
        setRoom(evt.target.value)
      }} />



      <button onClick={joinRoom}>Join Room</button>

    <input placeholder='message...' onChange={ (evt) => {
      setMessage(evt.target.value)

    }} />
    <button onClick={sendMessage}>Send Message</button>
     <h1>Message:</h1>
   Room number: {room} <br/> 
    {userName} says: {messageReceived}
    
    </div>
    </>
  );

   
  //     <div >
  //       <NavBar />
        
  //  <UserLogOut user={user} setUser={setUser} />
  
   
  //       <h1 id = "Title"> Chat </h1>
       
  //     <div >
  //     <label > Username  </label>
  //       <input placeholder="type your username..." className="form-control " type = "text"/>
  //       <label > Chatroom </label>
  //       <input placeholder="select a room..." className = "form-control "  type = "text"/>
        
  //       <input className="btn btn-primary" type = "submit" value = "Connect" onclick = "{Connect}"/>
  //     </div>
 
  //     <h2 id = "RoomID" > Chatroom : none </h2>
  //     <label id = "MessageLabel"> Message </label>
  //       <input id = "ComposedMessage" type = "text"></input>
  //       <input id = "SendMessage" onclick="{Send}" value = "Send" class = "Button" type = "submit"/>
        
  //     </div>
  

      
    // );
  };



