import React, { useState } from 'react';
import './Card.css';

const cardsData = [
  {
    id: 'c1',
    icon: '1',
    title: 'Search Engine Optimization (SEO)',
    description:
      'On-page and off-page SEO strategies. Keyword research, content optimization, and backlink building.',
    
  },
  {
    id: 'c2',
    icon: '2',
    title: 'Advertisement',
    description:
      'Google Ads and social media advertising campaigns. A/B testing and performance analysis.',
   
  },
  {
    id: 'c3',
    icon: '3',
    title: 'Social Media Marketing',
    description:
      'Strategy development and content creation for platforms like Facebook, Instagram, LinkedIn, etc. Community management and engagement strategies.',
    
  },
  {
    id: 'c4',
    icon: '4',
    title: 'Email Marketing',
    description:
      'Design and execution of email campaigns. List segmentation and performance tracking.',
    
  },
  {
    id: 'c5',
    icon: '5',
    title:'Analytics & Reporting',
    description:
      'Regular performance reports and insights. Google Analytics setup and monitoring.',
   
  },
  {
    id: 'c6',
    icon: '6',
    title: 'Brand Development',
    description:
      'Brand strategy and identity creation. Logo design, brand messaging, and positioning.',
    
  },
];

const CardContainer = () => {
  const [selectedCard, setSelectedCard] = useState('c1');

  const handleCardClick = (id) => {
    setSelectedCard(id);
  };

  return (
    <div className="wrapper">
      <div className="container">
        {cardsData.map((card) => (
          <label
            key={card.id}
            htmlFor={card.id}
            className={`card ${selectedCard === card.id ? 'active' : ''}`}
            
            onClick={() => handleCardClick(card.id)}
          >
            <div className="row">
              <div className="icon">{card.icon}</div>
              <div className="description">
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
