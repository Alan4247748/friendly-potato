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
    // You can perform additional validation or modify the form data as needed

    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');

    // Submit the form
    const form = e.target;
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
    })
      .then((response) => {
        console.log('Form submitted successfully:', response);
        // Handle success scenario
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        // Handle error scenario
      });

    console.log('Form submitted!');
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form className="form" onSubmit={handleSubmit} name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true">
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
        <p className={styles.hidden}>
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
      </form>
      <p className={styles.emailText}>
        Email: <span className={styles.emailAddress}>Donohomurphy@gmail.com</span>
      </p>
    </div>
  );
};

export default Form;
