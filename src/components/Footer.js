import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>"Жим-Жим"</h3>
            <p>Сеть современных фитнес-клубов для достижения ваших целей</p>
          </div>
          <div className="footer-section">
            <h4>Контакты</h4>
            <p>📞 +7 (999) 123-45-67</p>
            <p>✉️ info@zhim-zhim.ru</p>
          </div>
          <div className="footer-section">
            <h4>Часы работы</h4>
            <p>Пн-Пт: 6:00 - 24:00</p>
            <p>Сб-Вс: 8:00 - 22:00</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 "Жим-Жим". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;