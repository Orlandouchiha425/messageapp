import SignUpForm from "../../component/SignUpForm/SignUpForm"
import { useState } from "react"
import Carousel from "./Image"
import LoginForm from "../../component/LoginForm/LoginForm"
import styles from "./AuthPage.module.css"

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);
  
    return (
      <main>
        <div>
        <button className={styles.signupLoginButton}onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</button>

          <Carousel />
          
        </div>
        {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      </main>
    );
  }