import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';

const Header = ({ toggleTheme, currentTheme, setshowLogin}) => {
  return (
    <header className="app-header">
      <div className="header-left">
        <Link to="/" className="app-name">
          <h1 className="app-name">FitHub</h1>
        </Link>
      </div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/goals">Goals</Link>
        <Link to="/food-log">Food Log</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <div className="header-right">
        <button onClick={()=>setshowLogin(true)} className='premium-button'>Sign In</button>
        <div 
          className={`theme-toggle ${currentTheme}`} 
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <div className="toggle-circle"></div>
          <div className="icon sun-icon">☀️</div>
          <div className="icon moon-icon">🌙</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
