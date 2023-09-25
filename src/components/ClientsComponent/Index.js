import React from 'react';
import styles from './styles.module.css';

// Define an array of logo data
const logos = [
    { src: '/img/logo1.png', alt: 'Client Logo 1' },
    { src: '/img/logo2.png', alt: 'Client Logo 2' },
    { src: '/img/logo3.png', alt: 'Client Logo 3' },
    { src: '/img/logo4.png', alt: 'Client Logo 4' },
    { src: '/img/logo5.png', alt: 'Client Logo 5' },
    { src: '/img/logo6.png', alt: 'Client Logo 6' },
  ];
  

  const ClientsComponent = () => {
    return (
      <div className={styles['clients-container']}>
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className={styles['client-logo']} />
        ))}
      </div>
    );
  };
  

export default ClientsComponent;
