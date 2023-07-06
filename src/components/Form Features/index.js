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
    const form = e.target;
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
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

  if (isSubmitted) {
    // Render a success message or component instead of the form
    return (
      <div>
        <h1>Form Submitted Successfully!</h1>
        <p>Thank you for your submission.</p>
      </div>
    );
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
