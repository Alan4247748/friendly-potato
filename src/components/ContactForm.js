import React from 'react';
import '../path/to/contact.module.css';

const ContactForm = () => (
  <>
    <h1>Contact Form</h1>
    <div className="form-wrapper">
      <form name="contact" netlify="true">
        <p>
          <label>Name <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Email <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Message <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit" className="button">Send</button>
        </p>
      </form>
    </div>
  </>
);

export default ContactForm;
