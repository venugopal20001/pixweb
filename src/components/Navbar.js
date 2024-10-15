import React, { useState, useEffect } from 'react';
import './Navbar.css';
import pylogoo from '../Assets/pylogoo.png'; 

function Navbar() {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {  // Adjust scroll threshold as needed
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${navbarBackground ? 'scrolled' : ''}`}>
      <div className="image-container">
        <img src={pylogoo} alt="Sample" className="responsive-image" />
      </div>
      
      {/* Hamburger Icon for Mobile */}
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`} style={{margin: "0px", justifyContent: "center", alignItems: "center"}}>
        <li><a href="#hero">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#Services">SERVICES</a></li>
        <li><a href="#Projects">PROJECT</a></li>
        <li><a href="#Contact">CONTACT</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
