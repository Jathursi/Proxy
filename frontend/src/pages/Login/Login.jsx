import React, {useState} from 'react'
// import './Login.css'
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
    // <div className =' w-full flex justify-center bg-transparent'>
    //   <div className='w-[40%] flex justify-center rounded-lg bg-white'> 
    //     <div className="w-full p-5">
    //       <h2 className='text-black text-center text-2xl text-bold mb-3'>Login</h2>
    //       {error && <p className="error-message">{error}</p>}
    //       <div className="form-group">
    //         <label htmlFor="email">Email:</label>
    //         <input type = "email" placeholder ="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="password">Password:</label>
    //         <input type = "password" placeholder ="Enter Password" value={password} onChange={(e) =>setPassword(e.target.value)}
    //       />
    //       </div>
    //       <p className="text-black text-start"><Link to="/forgetpassword" >Forgot Password?</Link></p>
            
    //       <div className='flex w-full justify-center items-center'>
    //         <button className='bg-black p-2 rounded-lg w-[35%] ' onClick={handleLogin}>
    //           <span className='font-bold'>Login</span>
    //         </button>
    //       </div>
        
    //       <div className="signup-link">
    //         <p className='text-black text-start mt-2'> Don't have an account? <Link to="/signup" className="text-black">Sign Up</Link></p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex h-80 mt-10 justify-center items-center">
    <div className="container bg-white p-5 rounded-lg shadow-lg md:w-[30%] mx-4 md:mx-0">
      <h1 className="flex justify-center items-center text-3xl font-bold mb-5">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="block mb-2">Email address</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-400 rounded-lg"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-400 rounded-lg"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="w-full bg-black text-white font-semibold py-2 px-4 rounded-xl ">Login</button>
      </form>

      <div onClick={() => navigate("/signup")} className="flex gap-2 mb-5">
        <p>Don't have an account?</p> <span className='text-b2'>Sign Up</span>
      </div>
    </div>
  </div>
    
  )
}
export default Login
