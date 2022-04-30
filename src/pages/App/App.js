import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import { useState } from 'react';
import HomePage from './HomePage';
import {Routes, Route} from 'react-router-dom'
function App() {
  const [user,setUser]=useState(null)


  return (
    <main className="App">
       {
        user ?
     <Routes>
        <Route path='/home' element={<HomePage setUser={setUser}/>}/>
        
      </Routes>
        :
        <AuthPage element={<AuthPage setUser={setUser}/>} />
      }
      </main>

  );
}

export default App;
