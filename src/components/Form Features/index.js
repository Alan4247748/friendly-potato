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

    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');

    // Submit the form
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeFormData(formData),
    })
      .then((response) => {
        console.log('Form submitted successfully:', response);
        // Handle success scenario
        setIsSubmitted(true); // Set the state to indicate the form submission is successful
        // Redirect the user to the success page after a delay
        setTimeout(() => {
          window.location.href = '/success'; // Replace '/success' with the actual URL of your success page
        }, 2000); // Delay of 2000 milliseconds (2 seconds) before redirecting
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        // Handle error scenario
      });

    console.log('Form submitted!');
  };

  const encodeFormData = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form className="form" onSubmit={handleSubmit} name="contact" method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </p>
        <p>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </p>
        <p>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </p>
        <button type="submit">Submit</button>
      </form>
      <p className={styles.emailText}>
        Email: <span className={styles.emailAddress}>Donohomurphy@gmail.com</span>
      </p>
    </div>
  );
};

export default Form;