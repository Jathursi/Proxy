import React from 'react';
import './Contact.css';  


function Contact(){
  return (
    <div className = 'contact-page'>
    <div className="contact-container">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Drop us a message below.</p>
      </div>

        <div className="thank-you-message">
          <h3>Thank you for reaching out!</h3>
          <p>We will get back to you shortly.</p>
        </div>
     
        <form  className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Enter your message"
            />
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      

      <div className="contact-info">
        <h3>Our Contact Information:</h3>
        <p>Email: <a href="mailto:support@example.com">support@example.com</a></p>
        <p>Phone: +1 234 567 890</p>
      </div>
    </div>
    </div>
  );
};

export default Contact;
