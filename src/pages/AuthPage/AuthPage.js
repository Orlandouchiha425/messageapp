import { useState } from 'react';
import LoginForm from '../../component/LoginForm/LoginForm'
import SignUpForm from '../../component/SignUpForm/SignUpForm'

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main >
      <div>
        
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );
}