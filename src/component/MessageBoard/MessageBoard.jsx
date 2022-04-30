import ListOfUsers from "../ListOfUsers/ListOfUsers";
import socketIoFunc from '../../utilities/socketIoFunc'
// import styles from "../MessageBoard/MessageBoard.module.css"
export default function MessageBoard({setUser}){

  
  <ListOfUsers />

    return(
      // socketIoFunc()
   <div className="messageForm">

      
   <form className="sendMessages">
     <input type='text' className='messageInput'/>
     <buton type="submit" className="sendButton">Send</buton>
   </form>
   </div>  
   
    )
}