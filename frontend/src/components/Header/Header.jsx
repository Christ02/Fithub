import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-left">
        <Link to="/" className="app-name"> {/* Envolver FitHub con Link */}
          <h1 className="app-name">FitHub</h1>
        </Link>
      </div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/goals">Goals</Link>
        <Link to="/log">Log</Link>
        <Link to="/food-log">Food Log</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <div className="header-right">
        <button className="premium-button">Go Premium</button>

      </div>
    </header>
  );
};

export default Header;
