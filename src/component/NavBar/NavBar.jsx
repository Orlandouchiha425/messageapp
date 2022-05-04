import { useState } from "react"
import SignUpForm from "../SignUpForm/SignUpForm"
import LoginForm from "../LoginForm/LoginForm";
import { Link } from "react-router-dom";
export default function NavBar(){


    return(
        <nav className="navbar navbar-dark bg-dark">           
 <Link className="navbar-brand" to="/login" >Sign UP or Login</Link>
 </nav>
            
    )
}

{/* <button className="navbar-brand" onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</button>
{showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />} */}