import SignUpForm from "../../component/SignUpForm/SignUpForm";
import { useState } from "react";
import LoginForm from "../../component/LoginForm/LoginForm";
export default function AuthPage({setUser}){
    const[showSignUp, setShowSignUp]=useState(false)
    return(
        <main>
            <h1>AuthPage </h1>
                <button oncClick={()=>setShowSignUp(!showSignUp)}> {showSignUp ? 'Log In' : 'Sign Up' } </button>
       {
           showSignUp?
           <SignUpForm setUser={setUser} />
            :
            <LoginForm setUser={setUser}/>
       }
        </main>
    )
}