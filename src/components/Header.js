import React from 'react';
import './Header.css';

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Сеть фитнес клубов "Жим-Жим"</h1>
        </div>
        <nav className="nav">
          <button 
            className={currentPage === 'home' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentPage('home')}
          >
            Главная
          </button>
          <button 
            className={currentPage === 'clubs' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentPage('clubs')}
          >
            Клубы
          </button>
          <button 
            className={currentPage === 'membership' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentPage('membership')}
          >
            Абонементы
          </button>
        </nav>
        <button className="cta-button">Записаться на пробную тренировку</button>
      </div>
    </header>
  );
};

export default Header;