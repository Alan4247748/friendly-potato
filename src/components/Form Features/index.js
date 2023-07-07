import React, { useState } from 'react';
import styles from './styles.module.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Submit the form
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData(formData)
      });

      console.log('Form submitted successfully:', response);
      // Handle success scenario
      setIsSubmitted(true); // Set the state to indicate the form submission is successful
      // Redirect the user to the success page
      window.location.href = '/success'; // Replace '/success' with the actual URL of your success page
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error scenario
      window.location.href = 'https://www.damurphy.com/404';
    }

    // Reset the form fields
    setFormData({
      name: '',
      email: '',
      message: ''
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
      <form className={styles.form} onSubmit={handleSubmit} name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </p>
        <p>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </p>
        <p>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
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
