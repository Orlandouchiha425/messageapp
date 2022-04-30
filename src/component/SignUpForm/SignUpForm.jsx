import { useState } from "react"
import { signUp } from "../../utilities/users-service"
export default function SignUpForm({setUser}){
    const [state, setState]=useState({
        name:'',
        email:'',
        password:'',
        confirm:'',
        error:''
//decided to use function instead of class, this is saying , usestate will start with empty
//name email et...state is how it starts/ or name empty. setState is how we want to change it dynamically

    })

const handleChange = (evt) => {
     setState({...state, [evt.target.name]: evt.target.value, error: '' })

//this is saying, we want setState to by dynamic({will copy everything from state,name emailpassword etc
//but in the [evt.target.name value error, we specified what needs to be dynamic or needs changed thats why password and confirm is not necessary]})
    
    }



  const  handleSubmit=async(evt)=>{
        evt.preventDefault();
        //prevent function stops the default action from happening and stops the bubbling

    try{
        const formData={...state} //assign variable fomdata to everything in state from line 4-8 empty ofcourse,havent done anything yet
        delete formData.error;
        delete formData.confirm;

       const newUser=await signUp(formData)
       setUser(newUser)
        // const user=await SignUp(formData)
    }
      catch(err){
        console.log(err)
        setState({error: 'Sign Up Failed'})
                 }
    }



    
    const disable = state.password !== state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={state.name} onChange={handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={state.email} onChange={handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={state.password} onChange={handleChange} required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={state.confirm} onChange={handleChange} required />
            <button type="submit" disabled={disable}>SIGN UP test</button>
          </form>
        </div>
        <h1 className="error-message">&nbsp;{state.error}</h1>
      </div>
    );
    
}