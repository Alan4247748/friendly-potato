import React from 'react';
import NavbarConfig from './NavbarConfig';

const Navbar = () => {
  const navbarConfig = NavbarConfig();

  return (
    <nav>
      <div>
        <h1>{navbarConfig.title}</h1>
        {/* Render the logo if available */}
        {navbarConfig.logo && (
          <img src={navbarConfig.logo.src} alt={navbarConfig.logo.alt} />
        )}
        {/* Render the navbar items */}
        <ul>
          {navbarConfig.items.map((item, index) => (
            <li key={index} className={item.position}>
              <a href={item.to}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
