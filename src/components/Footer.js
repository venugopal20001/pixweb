import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>PIXELZY</h3>
      </div>
      <div className="footer-right">
        <ul className="social-icons">
          <li>
            <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/your-profile" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/your-channel" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </li>
          <li>
            <a href="mailto:your-email@gmail.com">
              Gmail
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
