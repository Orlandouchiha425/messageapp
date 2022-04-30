import SignUpForm from "../../component/SignUpForm/SignUpForm"
import { useState } from "react"
import Carousel from "./Image"
import LoginForm from "../../component/LoginForm/LoginForm"


export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);
  
    return (
      <main>
        <div>
          <Carousel />
          <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</button>
        </div>
        {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      </main>
    );
  }