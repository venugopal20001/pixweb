import React, { useState } from 'react';
import './Card.css';

const cardsData = [
  {
    id: 'c1',
    icon: '1',
    title: 'Custom Website Development',
    description:
      'Tailored solutions to meet specific business needs. Responsive design for optimal viewing on all devices.',
    
  },
  {
    id: 'c2',
    icon: '2',
    title: 'E-commerce Development',
    description:
      'Full-fledged online stores with secure payment gateways. Inventory management and user-friendly interfaces.',
    
  },
  {
    id: 'c3',
    icon: '3',
    title: 'Web Application Development',
    description:
      'Development of dynamic web applications tailored to business processes. Integration with existing systems and APIs.',
    
  },
  {
    id: 'c4',
    icon: '4',
    title: 'Website Maintenance & Support',
    description:
      'Regular updates, backups, and security checks. Technical support and troubleshooting.',
    
  },
  {
    id: 'c5',
    icon: '5',
    title: 'UI/UX Design',
    description:
      'User-centric design focusing on enhancing user experience. Wireframing and prototyping services.',
    
  },
  {
    id: 'c6',
    icon: '6',
    title: 'Performance Optimization',
    description:
      'Speed enhancements and SEO-friendly practices. Regular performance audits and reports.',
    
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
            style={{ backgroundImage: `url(${card.imageUrl})` }}
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
