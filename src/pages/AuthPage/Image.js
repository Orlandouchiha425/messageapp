import  chatBlogImage from './images/chat-blog-angle.jpeg'
import chatwithFriends from './images/chat-with-Friends.jpeg'
import chatting from './images/chatting.jpeg'
import styles from "./AuthPage.module.css"
export default function Carousel(){
  return(
    <div className={styles.backgroundcolor}>
    <div id="carousel" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
          <img src={chatBlogImage} className="d-block w-100 img" alt="chat"/>
      </div>
      <div className="carousel-item">
        <img src={chatwithFriends} className="d-block w-100 img" alt="chat with friends"/>
      </div>
      <div className="carousel-item">
        <img src={chatting} className="d-block w-100 img" alt="chatting"/>
      </div>
    </div>
  </div>
  </div>
  )
}