import React from 'react';
import Carousel from './Carousel';  // Import the Carousel component
import './Projects.css';            // Import the CSS for Projects component

const Projects = () => {
  return (
    
    <div className="projects-container" id='Projects'>
      <h1 className="projects-title">Projects</h1>
      <p className="projects-description">
        Here are some of the recent projects we’ve worked on. Each project has
        been designed with attention to detail, ensuring a responsive and
        engaging experience.
      </p>

      {/* Include the carousel below the title and paragraph */}
      <Carousel />
    </div>
    
  );
};

export default Projects;
