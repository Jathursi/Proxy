// import React, {useState} from 'react'
// // import './Login.css'
// import {login} from "../../authService"
// import { Link, useNavigate } from 'react-router-dom'
// import ForgotPassword from '../ForgetPassword/Forgetpassword';


// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleLogin = async() =>{
//     try{
//       await login(email, password);
//       alert("Login sucessful!");
//       navigate("/dashboard");
//     } catch(error){
//       setError(error.message);
//     }
//   };
  
//   return (
//     <div className="flex h-80 mt-10 justify-center items-center">
//     <div className="container bg-white p-5 rounded-lg shadow-lg md:w-[30%] mx-4 md:mx-0">
//       <h1 className="flex justify-center items-center text-3xl font-bold mb-5">Login</h1>
//       <form onSubmit={handleLogin}>
//         <div className="mb-3">
//           <label className="block mb-2">Email address</label>
//           <input
//             type="email"
//             className="w-full p-2 border border-gray-400 rounded-lg"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="block mb-2">Password</label>
//           <input
//             type="password"
//             className="w-full p-2 border border-gray-400 rounded-lg"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         <button type="submit" className="w-full bg-black text-white font-semibold py-2 px-4 rounded-xl ">Login</button>
//       </form>

//       <div onClick={() => navigate("/signup")} className="flex gap-2 mb-5">
//         <p>Don't have an account?</p> <span className='text-b2'>Sign Up</span>
//       </div>
//     </div>
//   </div>
    
//   )
// }
// export default Login


// Login.js
import React, { useState } from "react";
import { login } from "../../authService"; // Ensure this path is correct
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setError(null);

    try {
      await login(email, password);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          setError("No user found with this email.");
          break;
        case "auth/wrong-password":
          setError("Incorrect password.");
          break;
        case "auth/invalid-email":
          setError("Invalid email format.");
          break;
        default:
          setError(error.message);
      }
    }
  };

  return (
    <div className="flex h-80 mt-10 justify-center items-center">
      <div className="container bg-white p-5 rounded-lg shadow-lg md:w-[30%] mx-4 md:mx-0">
        <h1 className="flex justify-center items-center text-3xl font-bold mb-5">Login</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
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

          <button type="submit" className="w-full bg-black text-white font-semibold py-2 px-4 rounded-xl">
            Login
          </button>
        </form>

        <p className="text-black text-start mt-2">
          <Link to="forgetpassword" className="text-blue-600">Forgot Password?</Link>
        </p>

        <div onClick={() => navigate("signup")} className="flex gap-2 mt-3 cursor-pointer">
          <p>Don't have an account?</p> 
          <span className="text-blue-600">Sign Up</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
