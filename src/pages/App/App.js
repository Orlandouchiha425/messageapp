import AuthPage from '../AuthPage/AuthPage';
import { useState } from 'react';
import HomePage from './HomePage';
import {Routes, Route} from 'react-router-dom'
import MessageBoard from '../../component/MessageBoard/MessageBoard';
import { getUser } from '../../utilities/users-service';
import styles from './App.module.css';


// import {io} from "socket.io-client"
// const socket =io('http://localhost:3001')

// socket.on("connect", () => {
//     console.log(socket.id); // ojIckSD2jqNzOqIrAGzL
//   });

function App() {
  const [user,setUser] = useState(getUser())


  return (
    <main className={styles.App}>
      
       {
        user ?
     <Routes>
        <Route path='/' element={<HomePage  user={ user } setUser={setUser}/>}/>
        
      </Routes>
        :

        <HomePage />
        // <AuthPage setUser={setUser}/>
      }


      </main>

  );
}

export default App;
