import React from 'react';
import '../css/custom.css';
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer'; // Import the Footer component

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <main>{children}</main>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default DefaultLayout;

