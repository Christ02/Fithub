import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">FitHub</a>
      <ul className="navbar-menu">
        <li className="navbar-menu-item"><a href="/" className="navbar-menu-link">Home</a></li>
        <li className="navbar-menu-item"><a href="/log" className="navbar-menu-link">Log</a></li>
        <li className="navbar-menu-item"><a href="/progress" className="navbar-menu-link">Progress</a></li>
        <li className="navbar-menu-item"><a href="/profile" className="navbar-menu-link">Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
