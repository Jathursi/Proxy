// import React from 'react';
// // import './Contact.css';  


// function Contact(){
//   return (
//     // <div className = 'contact-page'>
//     // <div className="contact-container">
//     //   <div className="contact-header">
//     //     <h2>Contact Us</h2>
//     //     <p>We'd love to hear from you! Drop us a message below.</p>
//     //   </div>

//     //     <div className="thank-you-message">
//     //       <h3>Thank you for reaching out!</h3>
//     //       <p>We will get back to you shortly.</p>
//     //     </div>
     
//     //     <form  className="contact-form">
//     //       <div className="form-group">
//     //         <label htmlFor="name">Your Name</label>
//     //         <input
//     //           type="text"
//     //           id="name"
//     //           name="name"
//     //           required
//     //           placeholder="Enter your name"
//     //         />
//     //       </div>

//     //       <div className="form-group">
//     //         <label htmlFor="email">Your Email</label>
//     //         <input
//     //           type="email"
//     //           id="email"
//     //           name="email"
//     //           required
//     //           placeholder="Enter your email"
//     //         />
//     //       </div>

//     //       <div className="form-group">
//     //         <label htmlFor="message">Your Message</label>
//     //         <textarea
//     //           id="message"
//     //           name="message"
//     //           required
//     //           placeholder="Enter your message"
//     //         />
//     //       </div>

//     //       <button type="submit" className="submit-btn">Send Message</button>
//     //     </form>
      

//     //   <div className="contact-info">
//     //     <h3>Our Contact Information:</h3>
//     //     <p>Email: <a href="mailto:support@example.com">support@example.com</a></p>
//     //     <p>Phone: +1 234 567 890</p>
//     //   </div>
//     // </div>
//     // </div>
//     <div className =' w-full flex justify-center bg-transparent'>
//       <div className='w-[40%] flex justify-center rounded-lg bg-white'> 
//         <div className="w-full p-5">
//           <h2 className='text-black text-center text-2xl text-bold mb-3'>Login</h2>
//           {/* {error && <p className="error-message">{error}</p>} */}
//           <div className="form-group">
//             <label htmlFor="name">Your Name:</label>
//             <input type = "text" placeholder ="Enter Name" 
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Your Email:</label>
//             <input type = "email" placeholder ="Enter Email" 
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Message:</label>
//             <textarea rows={5} className='border-black'></textarea>
//           </div>
//           {/* <p className="text-black text-start"><Link to="/forgetpassword" >Forgot Password?</Link></p> */}
            
//           <div className='flex w-full justify-center items-center'>
//             <button className='bg-black p-2 rounded-lg w-[35%] ' >
//               <span className='font-bold'>Send Message</span>
//             </button>
//           </div>
        
//           <div className="signup-link">
//             {/* <p className='text-black text-start mt-2'> Don't have an account? <Link to="/signup" className="text-black">Sign Up</Link></p> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_53hoyon",
        "template_mikzp9k",
        form.current,
        "uk6hSMKyxcHRGKBqM"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent!");
          // alert("Message sent!");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
          alert(error.text)
        }
      );
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[40%] m-0 mt-6 mb-6 md:m-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Contact Us
        </h2>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col mx-0 md:mx-10">
          <label className="font-semibold text-gray-700">Name</label>
          <input
            type="text"
            name="user_name"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-teal-500"
            required
          />

          <label className="font-semibold text-gray-700 mt-4">Email</label>
          <input
            type="email"
            name="user_email"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-teal-500"
            required
          />

          <label className="font-semibold text-gray-700 mt-4">Message</label>
          <textarea
            name="message"
            className="border border-gray-300 rounded-md p-2 h-28 focus:outline-none focus:border-teal-500"
            required
          ></textarea>

          <button
            type="submit"
            className="mt-6 bg-black text-white font-bold py-2 px-4 rounded-md hover:bg-b2 transition-all"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;