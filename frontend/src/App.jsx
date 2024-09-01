import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage  from './pages/DashboardPage';
import FoodLog from './pages/FoodLog';
import Header from './components/Header/Header';
import FooterNav from './components/FooterNav/FooterNav';


function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <Header toggleTheme={toggleTheme} currentTheme={theme} />
      <Routes>
        <Route path="/" element={<DashboardPage  />} />
        <Route path="/food-log" element={<FoodLog />} />
      </Routes>
      <FooterNav />
    </Router>
  );
}

export default App;



