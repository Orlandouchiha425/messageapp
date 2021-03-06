import AuthPage from '../AuthPage/AuthPage';
import { useState } from 'react';
import HomePage from './HomePage';
import {Routes, Route} from 'react-router-dom'
import MessageBoard from '../../component/MessageBoard/MessageBoard';
import { getUser } from '../../utilities/users-service';
import styles from './App.module.css';
import UserLogOut from '../../component/UserLogOut/UserLogOut';
import Test from '../../component/test/test';
// import Test from '../../component/test/test';

// import {io} from "socket.io-client"
// const socket =io('http://localhost:3001')

// socket.on("connect", () => {
//     console.log(socket.id); // ojIckSD2jqNzOqIrAGzL
//   });

function App() {
  const [user,setUser] = useState(getUser())


  return (
    <main className={styles.App}>
      
       
         
     <Routes>
       {
         user ?
         <>
  
            {/* <Route path='/*' element={<MessageBoard  user={ user } setUser={setUser}/>}/>   */}
            <Route path='/messageboard' element={<MessageBoard  user={ user } setUser={setUser}/>}/>  


            {/* <Route path='/test' element={<Test />}/> */}
         </>
         :
         <>
          
          <Route path='/' element={<HomePage />}/>
          <Route path='/login' element={<AuthPage setUser={setUser}/>}/>
          <Route path="/*"  element={<HomePage user={ user } setUser={setUser}/>}/>
         </>

       }
       
       
      </Routes>
        

     
    
        
      

      </main>

  );
}

export default App;
