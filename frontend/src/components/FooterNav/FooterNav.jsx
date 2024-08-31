import React from 'react';
import './FooterNav.css';

const FooterNav = () => {
  return (
    <nav className="footer-nav">
      <a href="/" className="nav-item active">
        <img src="/path/to/dashboard-icon.png" alt="Dashboard" />
        <span>Dashboard</span>
      </a>
      <a href="/diary" className="nav-item">
        <img src="/path/to/diary-icon.png" alt="Diary" />
        <span>Diary</span>
      </a>
      <a href="/plans" className="nav-item">
        <img src="/path/to/plans-icon.png" alt="Plans" />
        <span>Plans</span>
      </a>
      <a href="/more" className="nav-item">
        <img src="/path/to/more-icon.png" alt="More" />
        <span>More</span>
      </a>
    </nav>
  );
};

export default FooterNav;
