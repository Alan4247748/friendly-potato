import React from 'react';
import FooterConfig from './FooterConfig';

const Footer = () => {
  const footerConfig = FooterConfig();

  return (
    <footer className={footerConfig.style}>
      {footerConfig.links.map((section) => (
        <div key={section.title}>
          <h4>{section.title}</h4>
          <ul>
            {section.items.map((item) => (
              <li key={item.label}>
                {item.to ? (
                  <a href={item.to}>{item.label}</a>
                ) : (
                  <a href={item.href}>{item.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p>{footerConfig.copyright}</p>
    </footer>
  );
};

export default Footer;
