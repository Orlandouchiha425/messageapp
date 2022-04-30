import  chatBlogImage from './images/chat-blog-angle.jpeg'
import chatwithFriends from './images/chat-with-Friends.jpeg'
import chatting from './images/chatting.jpeg'
export default function Carousel(){
  return(
    <div id="carousel" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
          <img src={chatBlogImage} className="d-block w-100 " alt="chat"/>
      </div>
      <div className="carousel-item">
        <img src={chatwithFriends} className="d-block w-100" alt="chat with friends"/>
      </div>
      <div className="carousel-item">
        <img src={chatting} className="d-block w-100" alt="chatting"/>
      </div>
    </div>
  </div>
  )
}