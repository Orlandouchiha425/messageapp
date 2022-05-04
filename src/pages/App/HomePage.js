import UserLogOut from '../../component/UserLogOut/UserLogOut';
import MessageBoard from '../../component/MessageBoard/MessageBoard';
import image1 from ".././AuthPage/images/chatter.png"
import NavBar from '../../component/NavBar/NavBar';
import Logo from '../../component/Logo/Logo';
export default function HomePage(){



    return(
        <main>
<NavBar />
            <div>
            <Logo />
        <img className="parent" src={image1} width="100%" />
      
        </div>
        
        </main>
     
    
    )
}