import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GymCard from '../components/GymCard';
import './Clubs.css';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const Clubs = () => {
  const [gyms, setGyms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGyms = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const gymsResponse = await api.get('/gyms');      
      setGyms(gymsResponse.data);
      
    } catch (err) {
      console.error('Ошибка при загрузке:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGyms();
  }, []);

  if (loading) {
    return (
      <div className="clubs">
        <div className="container">
          <div className="loading">
            <div>Загрузка клубов...</div>
            <div className="loading-spinner"></div>
            <div style={{fontSize: '0.9rem', color: '#666', marginTop: '10px'}}>
              Ожидание ответа от сервера
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="clubs">
      <div className="container">
        <div className="clubs-header">
          <h1>Наши клубы</h1>
          <p>Выберите фитнес-клуб, который подходит именно вам</p>
          
          {error && (
            <div className="error-message">
              <div style={{whiteSpace: 'pre-line', textAlign: 'left'}}>
                <strong>Ошибка подключения:</strong> 
                {"\n" + error}
              </div>
              <div style={{fontSize: '0.9rem', marginTop: '10px', color: '#666'}}>
                Сейчас отображаются демо-данные
              </div>
            </div>
          )}
        </div>

        <div className="gyms-grid">
          {gyms.map(gym => (
            <GymCard key={gym.id} gym={gym} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clubs;