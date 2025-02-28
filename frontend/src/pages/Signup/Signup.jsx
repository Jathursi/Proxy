import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'



function Signup() {
  
  return (

    <div className = 'signup-page'>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type = "text" placeholder ="Enter Name"
          />
        </div>
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
       
        <button className='btn-login' >Signup</button>
        <div className="login-link">
        <br /> 
          <p>Already have an account? <Link to="/login" className="login-text">Login</Link></p>
        </div>
      </div>
    </div>
    
  )
}
export default Signup

