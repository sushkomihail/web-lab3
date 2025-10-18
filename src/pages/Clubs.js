import React from 'react';
import GymCard from '../components/GymCard';
import './Clubs.css';

const Clubs = () => {
  const gyms = [
    {
      id: 1,
      name: '"Жим-Жим" Центр',
      address: 'ул. Центральная, 15',
      hours: '6:00 - 24:00',
      features: ['Бассейн', 'SPA', 'Тренажерный зал', 'Групповые занятия'],
      image: '/images/gym1.jpg'
    },
    {
      id: 2,
      name: '"Жим-Жим" Север',
      address: 'пр. Северный, 42',
      hours: '6:00 - 23:00',
      features: ['Тренажерный зал', 'Кардиозона', 'Функциональный тренинг'],
      image: '/images/gym2.jpg'
    },
    {
      id: 3,
      name: '"Жим-Жим" Запад',
      address: 'ул. Западная, 88',
      hours: '7:00 - 23:00',
      features: ['Бассейн', 'Йога-студия', 'Пилатес', 'Боевые искусства'],
      image: '/images/gym3.jpg'
    },
  ];

  return (
    <div className="clubs">
      <div className="container">
        <div className="clubs-header">
          <h1>Наши клубы</h1>
          <p>Выберите фитнес-клуб, который подходит именно вам</p>
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