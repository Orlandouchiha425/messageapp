import { useState } from "react";
import * as userService from '../../utilities/users-service'
import styles from "./LoginForm.module.css"
import { useNavigate } from "react-router-dom";


export default function LoginForm({setUser}){
    const [credentials,setCredentials]=useState({
        email:'',
        password:'',
    })
    const [error,setError]=useState('')
    const navigate=useNavigate()



    const handleChange=(evt)=>{
        setCredentials({...credentials,[evt.target.name]: evt.target.value });
        setError('');
    }

    const handleSubmit=async(evt)=>{
        evt.preventDefault()
        try{
            const loggedInUser=await userService.login(credentials)
            setUser(loggedInUser)
            navigate('/messageboard')
        }catch(error){
            setError(error.message)
        }
    }

    return (
        <div>
            <div className={styles.LoginForm}>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" name="email" value={credentials.email} defaultValue="test@gmail.com" onChange={handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={credentials.password}  defaultValue="123456" onChange={handleChange} required />
                <button className="position-sticky shadow-lg p-3 mb-5 bg-primary rounded " type="submit">LOG IN</button>
            </form>
            </div>
            <h1 className="error-message">&nbsp;{error}</h1>
        </div>
    )

}

//this page is identical to signup form, only difference is we dont need name and create password
//we just get this and save it for now, we will use this information from sign up and auth 
//in AuthPage