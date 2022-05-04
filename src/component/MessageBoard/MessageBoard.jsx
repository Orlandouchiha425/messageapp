import { useState,useEffect } from "react"
import styles from "./MessageBoard.module.css"




export default function MessageBoard(){




  



  
    return (


      <form>
      <div className="form-row ">
        <label > Username  </label>
        <input placeholder="type your username..." className="form-control " type = "text"/>
        <label > Chatroom </label>
        <input placeholder="select a room..." className = "form-control "  type = "text"/>
        
        <input className="btn btn-primary" type = "submit" value = "Connect" onclick = "Connect()"/>
       
 
       
      </div>
      </form>
    );
  };



