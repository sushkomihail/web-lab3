import React, { useState } from 'react';
import './Membership.css';

const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 1,
      name: 'Разовый чик-чирик',
      price: '500',
      period: 'занятие',
    },
    {
      id: 2,
      name: 'Месячный',
      price: '1 500',
      period: 'месяц',
    },
    {
      id: 3,
      name: 'Годовой',
      price: '12 000',
      period: 'год',
    }
  ];

  return (
    <div className="membership">
      <div className="container">
        <div className="membership-header">
          <h1>Абонементы</h1>
          <p>Выберите подходящий вариант для достижения ваших целей</p>
        </div>

        <div className="plans-grid">
          {plans.map(plan => (
            <div 
              key={plan.id} 
              className={`plan-card ${selectedPlan === plan.id ? 'selected' : ''}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price} ₽</span>
                <span className="period">/{plan.period}</span>
              </div>
              <button className="select-btn">
                {selectedPlan === plan.id ? 'Оформлено' : 'Оформить'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;