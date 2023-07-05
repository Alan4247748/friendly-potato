import React, { useState } from 'react';
import styles from './styles.module.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form className="form" onSubmit={handleSubmit} name="contact" data-netlify="true" netlify>
        <input
          type="hidden"
          name="form-name"
          value="contact"
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Click Me</button>
      </form>
    </div>
  );
};

export default Form;
