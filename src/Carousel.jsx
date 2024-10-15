import React, { useState } from 'react';
import './Carousel.css';
import mlg from "../src/Assets/mlg.jpeg"

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = [
    {
      id: 1,
      content: 'CAR RENTALS',
      url: 'https://www.mlgcorporate.in/',
      preview: 'https://www.example1.com/screenshot.jpg' // URL to the preview image
    },
    {
      id: 2,
      content: 'Project 2',
      url: 'https://www.example2.com',
      preview: 'https://www.example2.com/screenshot.jpg'
    },
    {
      id: 3,
      content: 'Project 3',
      url: 'https://www.example3.com',
      preview: 'https://www.example3.com/screenshot.jpg'
    },
    {
      id: 4,
      content: 'Project 4',
      url: 'https://www.example4.com',
      preview: 'https://www.example4.com/screenshot.jpg'
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="carousel-container" id="carousel">
      <div className="carousel-wrapper">
        {items.map((item, index) => (
          <div
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            key={item.id}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(item.url)}
            style={{ cursor: 'pointer', position: 'relative' }}
          >
            {item.content}

            {/* Show the full-sized preview on hover */}
            {hoveredIndex === index && (
              <div className="website-preview full-preview">
                <img src={item.preview} alt={`click to open ${item.content}`} />
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="carousel-btn prev-btn" onClick={handlePrev}>
        &#8249;
      </button>
      <button className="carousel-btn next-btn" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
