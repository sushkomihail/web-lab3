import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Membership.css';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const Membership = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPlans = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.get('/plans');
      setPlans(response.data);

    } catch (err) {
      console.error('Ошибка при загрузке:', err);  
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <div className="membership">
      <div className="container">
        <div className="membership-header">
          <h1>Абонементы</h1>
          <p>Выберите подходящий вариант для достижения ваших целей</p>
        </div>

        <div className="plans-grid">
          {plans.map(plan => (
            <div key={plan.id} className="plan-card" >
              <h3>{plan.name}</h3>
              
              {plan.description && (
                <p className="plan-description">{plan.description}</p>
              )}
              
              <div className="price">
                <span className="amount">{plan.price} ₽</span>
                <span className="period">/{plan.period}</span>
              </div>
              <button className="select-btn">Оформить</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;