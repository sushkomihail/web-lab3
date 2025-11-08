import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Clubs from './pages/Clubs.js';
import Membership from './pages/Membership.js';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'clubs':
        return <Clubs />;
      case 'membership':
        return <Membership />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;