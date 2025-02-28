import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'



function Login() {
  
  return (
    <div className = 'login-page'>
      <div className="login-container">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type = "email" placeholder ="Enter Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type = "password" placeholder ="Enter Password"
         />
        </div>

        <div className="forgot-password-link">
          <br />
          <p><Link to="/forgetpassword" className="forgot-password-text">Forgot Password?</Link></p>
        </div>
       
        <button className='btn-login' >Login</button>
        <div className="signup-link">
        <br /> 
          <p>Don't have an account? <Link to="/signup" className="signup-text">Sign Up</Link></p>
        </div>
      </div>
    </div>
    
  )
}
export default Login
