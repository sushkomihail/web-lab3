import React from 'react';
import Hero from '../components/Hero';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: '💪',
      title: 'Современное оборудование',
      description: 'Тренажеры последнего поколения от мировых брендов'
    },
    {
      icon: '👨‍🏫',
      title: 'Профессиональные тренеры',
      description: 'Сертифицированные специалисты с опытом работы'
    },
    {
      icon: '🏊‍♂️',
      title: 'Бассейн и SPA',
      description: 'Комфортные зоны для восстановления и релаксации'
    },
    {
      icon: '👥',
      title: 'Групповые занятия',
      description: 'Более 50 направлений групповых тренировок'
    }
  ];

  return (
    <div className="home">
      <Hero />
      <section className="features">
        <div className="container">
          <h2>Почему выбирают "Жим-Жим"?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <h3>15+</h3>
              <p>фитнес-клубов</p>
            </div>
            <div className="stat">
              <h3>50,000+</h3>
              <p>довольных клиентов</p>
            </div>
            <div className="stat">
              <h3>100+</h3>
              <p>профессиональных тренеров</p>
            </div>
            <div className="stat">
              <h3>10</h3>
              <p>лет на рынке</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;