import React ,{useState} from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import {signUp} from "../../authService";


function Signup() {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await signUp(email, password);  
      alert("Signup successful!");
      navigate("/login");  
    } catch (error) {
      setError(error.message);
    }
  };
  
  return (

    <div className = 'signup-page'>
      <div className="signup-container">
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type = "text" placeholder ="Enter Name"  value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type = "email" placeholder ="Enter Email"  value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type = "password" placeholder ="Enter Password" value={password}
            onChange={(e) => setPassword(e.target.value)}
         />
        </div>
       
        <button className='btn-login' onClick={handleSignup}>Signup</button>
        <div className="login-link">
        <br /> 
          <p>Already have an account? <Link to="/login" className="login-text">Login</Link></p>
        </div>
      </div>
    </div>
    
  )
}
export default Signup;

