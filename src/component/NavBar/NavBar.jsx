import { useState } from "react"
import SignUpForm from "../SignUpForm/SignUpForm"
import LoginForm from "../LoginForm/LoginForm";
import { Link } from "react-router-dom";
import UserLogOut from "../UserLogOut/UserLogOut";

export default function NavBar(){

    return(
        <nav className="navbar navbar-dark bg-dark">           
 <Link className="navbar-brand" to="/login" >Sign UP or Login</Link>
 <Link className="navbar-brand" to="/" >Home</Link>
 <Link className="navbar-brand" to="/messageboard">Message Board</Link>

 </nav>
            
    )
}

{/* <button className="navbar-brand" onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</button>
{showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />} */}