import React from 'react';
import './HeroSection.css'; // Import a CSS file for styling

const HeroSection = () => {
  return (
    <section className="hero" id='hero'>
      <div className="hero-content">
        <h1 className="hero-title">PIXELZY</h1>
        <p className="bounce">HUMANLY DIGITAL</p>
        <h1 className='hero-des'>CREATIVE DIGITAL MAKERS SPECIALIZED IN DESIGN AND MARKETING</h1>
      </div>
      <div className="button-section-container">
        <button className="custom-button">Start a Project</button>
      </div>
      <div className="marquee-container">
        <div className="marquee-content">
          START YOUR PROJECT::: START YOUR PROJECT
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
