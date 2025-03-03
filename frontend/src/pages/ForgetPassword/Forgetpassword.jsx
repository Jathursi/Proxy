import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth"; 
import { getAuth } from "firebase/auth";
// import "./Forgetpassword.css";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState(""); 
  const [error, setError] = useState(null); 
  const [success, setSuccess] = useState(null); 
  const navigate = useNavigate();
  const auth = getAuth();

  const handlePasswordReset = async () => {
    setError(null); 
    setSuccess(null); 

    if (!email) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess("If this email is registered, a password reset email has been sent.");
    } catch (error) {
      console.log(error); 

      if (error.code === "auth/user-not-found") {
        setError("No user found with this email address.");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email format. Please enter a valid email.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  }

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <h2>Forgot Password</h2>

        {error && <p className="error-message">{error}</p>}

        {success && <p className="success-message">{success}</p>}

        <div className="form-group">
          <label htmlFor="email">Enter your email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>

        <button className="btn-reset" onClick={handlePasswordReset} >Reset Password</button>

        <div className="login-link">
          <br />
          <p>
            Remembered your password? <Link to="/login" className="login-text">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
 }

export default ForgotPassword;
