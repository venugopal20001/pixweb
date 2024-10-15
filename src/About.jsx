import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    const textSections = document.querySelectorAll('.abt1, .abt2, .abt3');
    
    // Function to handle animation trigger
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        console.log(`Intersection for ${entry.target.className}:`, entry.isIntersecting); // Debugging info
        
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    };

    // Create Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    // Observe each section
    textSections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      textSections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section className='about-section'>

    <div className="about-container" id='about'>
      <div className="text-section">
        <p className="abt1">IDEA*</p>
        <p className="abt2">DESIGN*</p>
        <p className="abt3">GROWTH.</p>

      
      </div>
      <p className="about-desc">
          PIXELZY IS A DIGITAL PRODUCT STUDIO SPECIALIZED IN STRATEGY, DESIGN AND MARKETING. WE LEAD BUSINESS INTO DIGITAL FUTURE.
        </p>
      <div className="image-section">
        <img src="https://via.placeholder.com/300" alt="About Us" className="about-image" />
      </div>
    </div>
    </section>
  );
};

export default About;
