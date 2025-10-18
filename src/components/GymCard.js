import React from 'react';
import './GymCard.css';

const GymCard = ({ gym }) => {
  return (
    <div className="gym-card">
      <div className="gym-info">
        <h3>{gym.name}</h3>
        <p className="gym-address">{gym.address}</p>
        <p className="gym-hours">{gym.hours}</p>
        <div className="gym-features">
          {gym.features.map((feature, index) => (
            <span key={index} className="feature-tag">{feature}</span>
          ))}
        </div>
        <button className="visit-btn">Подробнее</button>
      </div>
    </div>
  );
};

export default GymCard;