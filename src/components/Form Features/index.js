import React, { useState } from 'react';
import styles from './styles.module.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    const formData = {
      name: name,
      email: email,
      message: message,
    };
    // You can perform additional validation or modify the form data as needed

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Invalid email format');
      // Handle error scenario for invalid email format
      return; // Stop the submission process
    }

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
        setIsSubmitted(true); // Set the state to indicate the form submission is successful
        // Redirect the user to the success page immediately
        window.location.href = '/success'; // Replace '/success' with the actual URL of your success page
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        // Handle error scenario
      });

    console.log('Form submitted!');
  };

  if (isSubmitted) {
    // Render a success message or component instead of the form
    return null; // Return null to hide any content
  }

  return (
    <div>
      <h1>Contact Me</h1>
      <form className="form" onSubmit={handleSubmit} name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type="submit">Submit</button>
      </form>
      <p className={styles.emailText}>
        Email: <span className={styles.emailAddress}>Donohomurphy@gmail.com</span>
      </p>
    </div>
  );
};

export default Form;
