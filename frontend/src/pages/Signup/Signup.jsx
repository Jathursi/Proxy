import React ,{useState} from 'react'
// import './Signup.css'
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

    // <div className = 'signup-page'>
    //   <div className="signup-container">
    //     <h2>Sign Up</h2>
    //     {error && <p className="error-message">{error}</p>}
    //     <div className="form-group">
    //       <label htmlFor="name">Name:</label>
    //       <input type = "text" placeholder ="Enter Name"  value={name}
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="email">Email:</label>
    //       <input type = "email" placeholder ="Enter Email"  value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="password">Password:</label>
    //       <input type = "password" placeholder ="Enter Password" value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //      />
    //     </div>
       
    //     <button className='btn-login' onClick={handleSignup}>Signup</button>
    //     <div className="login-link">
    //     <br /> 
    //       <p>Already have an account? <Link to="/login" className="login-text">Login</Link></p>
    //     </div>
    //   </div>
    // </div>
    <div className="flex justify-center mt-10 items-center ">
    <div className='container bg-white p-5 rounded-lg shadow-lg md:w-[30%] mx-4 md:mx-0 mb-6'>
      <h1 className='flex justify-center items-center text-3xl font-bold mb-5'>Signup</h1>
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label className='block mb-2'>Full name</label>
          <input type="text" className="w-full p-2 border border-gray-400 rounded-lg" placeholder="First name" onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className='block mb-2'>Email address</label>
          <input type="email" className="w-full p-2 border border-gray-400 rounded-lg" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className='block mb-2'>Password</label>
          <input type="password" className="w-full p-2 border border-gray-400 rounded-lg" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {/* <div className="mb-3">
          <label className='block mb-2'>Role</label>
          <select className="w-full p-2 border border-gray-400 rounded-lg" onChange={(e) => setRole(e.target.value)} value={role} required>
            <option value="student">Student</option>
            <option value="staff">Staff</option>
          </select>
        </div> */}
        <button type='submit' className='w-full bg-black text-white font-semibold py-2 px-4 rounded-xl '>Sign Up</button>
      </form>
      <p>Already registered <span onClick={() => navigate('/login')} className='text-b2'>Login</span></p>
    </div>
  </div>
  )
}
export default Signup;

