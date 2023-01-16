import React, { useState } from "react";

// import for email validation
import { validateEmail } from "../utils/helpers";

function Contact() {

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // error messages
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or Name is invalid");
      return;
    }

    if (!setMessage(message)) {
      setErrorMessage(`Message is required.`);
      return;
    }

    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <section id="reach-out" className="contact">
      {/* contact form section */}
      <div className="contact-form">
        <h3>Contact Me</h3>
        <form className="form">

          <label className="label" for="contact-name">
            Your Name:
          </label>
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            id="contact-name"
            placeholder="Your Name"
          />
          <label className="label" for="contact-email">
            Your Email:
          </label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            id="contact-email"
            placeholder="Your Email"
          />

          <label className="label" for="contact-message">
            Message:
          </label>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            id="contact-message"
            placeholder="Your Message"
          />
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        {errorMessage && (
          <div class="errorMsg">
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;