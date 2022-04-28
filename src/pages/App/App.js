import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
function App() {
  cosnt [user,setUser]=useState(null)


  return (
    <main className="App">
      {
        user ?
     <Routes>
        <Route path='/home'element={<AuthPage />}/>
        
      </Routes>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
