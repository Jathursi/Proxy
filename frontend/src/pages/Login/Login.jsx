import React, {useState} from 'react'
import './Login.css'
import {login} from "../../authService"
import { Link, useNavigate } from 'react-router-dom'
import ForgotPassword from '../ForgetPassword/Forgetpassword';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async() =>{
    try{
      await login(email, password);
      alert("Login sucessful!");
      navigate("/dashboard");
    } catch(error){
      setError(error.message);
    }
  };
  
  return (
    <div className = 'login-page'>
      <div className="login-container">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type = "email" placeholder ="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type = "password" placeholder ="Enter Password" value={password} onChange={(e) =>setPassword(e.target.value)}
         />
        </div>

        <button className='btn-login' onClick={handleLogin}>Login</button>

        <div className="forgot-password-link">
          <br />
          <p><Link to="/forgetpassword" className="forgot-password-text">Forgot Password?</Link></p>
        </div>
       
       
        <div className="signup-link">
        <br /> 
          <p>Don't have an account? <Link to="/signup" className="signup-text">Sign Up</Link></p>
        </div>
      </div>
    </div>
    
  )
}
export default Login
