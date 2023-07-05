import React, { useState } from 'react';
import styles from './styles.module.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    const formData = {
      name: name,
      email: email,
      message: message,
    };
    // You can perform additional validation or send the form data to an API

    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');

    console.log('Form submitted!');
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form className="form" onSubmit={handleSubmit} name="contact" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Click Me</button>
      </form>
      <p className={styles.emailText}>
        Email: <span className={styles.emailAddress}>Donohomurphy@gmail.com</span>
      </p>
    </div>
  );
};

export default Form;
