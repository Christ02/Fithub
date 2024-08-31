import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import FoodLog from './pages/FoodLog';
import Header from './components/Header/Header';
import FooterNav from './components/FooterNav/FooterNav';

function App() {
  return (
    <Router>
      <Header /> {/* Este header se mostrará en todas las páginas */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/food-log" element={<FoodLog />} />
      </Routes>
      <FooterNav /> {/* Este footer se mostrará en todas las páginas */}
    </Router>
  );
}

export default App;
