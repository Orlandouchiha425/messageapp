import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import { useState } from 'react';
import HomePage from './HomePage';
import {Routes, Route} from 'react-router-dom'
import MessageBoard from '../../component/MessageBoard/MessageBoard';
function App() {
  const [user,setUser] = useState(null)


  return (
    <main className="App">
       {
        user ?
     <Routes>
        <Route path='/' element={<MessageBoard />}/>
        
      </Routes>
        :
        <AuthPage setUser={setUser}/>
      }


      </main>

  );
}

export default App;
