import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
function App() {
  const [user,setUser]=useState(null)


  return (
    <main className="App">
       {
        user ?
     <Routes>
        <Route path='/home'element={<AuthPage setUser={setUser}/>}/>
        
      </Routes>
        :
        <AuthPage setUser={setUser} />
      }
      </main>

  );
}

export default App;
