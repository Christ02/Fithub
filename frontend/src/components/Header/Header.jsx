import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-left">
        <h1 className="app-name">FitHub</h1>
      </div>
      <div className="header-right">
        <nav className="header-nav">
          <a href="/">Inicio</a>
          <a href="/objetivos">Objetivos</a>
          <a href="/registro">Registrar</a>
          <a href="/perfil">Perfil</a>
        </nav>
        <button className="premium-button">Go Premium</button>
        <div className="user-options">
          <span>Hola, Usuario</span>
          <button className="notification-icon">
            <img src="/path/to/bell-icon.png" alt="Notifications" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
