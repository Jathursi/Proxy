
import "./Forgetpassword.css";
import { Link } from "react-router-dom";

function ForgotPassword() {

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <h2>Forgot Password</h2>

    
    
        <div className="form-group">
          <label htmlFor="email">Enter your email:</label>
          <input
            type="email"
            placeholder="Enter Email"
          />
        </div>

        <button className="btn-reset" >Reset Password</button>

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
