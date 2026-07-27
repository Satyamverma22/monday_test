import { useState } from "react";
import Data from "../../data/Data.js";
import Navbar from "../components/Navbar.jsx";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <>
      <Navbar />

      <main className="contact-page">
        <div className="contact-box">
          <h1>Contact Me</h1>
          <p>Enter your details below.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-box">
              <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Enter your name" value={name} onChange={(event) => { setName(event.target.value);setIsSubmitted(false);}}required/>
            </div>

            <div className="input-box">
              <label htmlFor="email">Email</label>

              <input id="email" type="email" placeholder="Enter your email" value={email} onChange={(event) => { setEmail(event.target.value); setIsSubmitted(false);}} required />
            </div>

            <div className="input-box">
              <label htmlFor="phone">Phone Number</label>

              <input id="phone" type="tel" placeholder="Enter your phone number" value={phone} onChange={(event) => {setPhone(event.target.value); setIsSubmitted(false); }} required/>
            </div>

            <button type="submit" className="send-button">
              Send
            </button>
          </form>

            <p>
                Hello {name}, your mail has been successfully
                sent. {Data.name} will contact you soon!
            </p>
        </div>
      </main>
    </>
  );
};

export default Contact;