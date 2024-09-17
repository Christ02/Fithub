import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage  from './pages/DashboardPage';
import FoodLog from './pages/FoodLogPage';
import Header from './components/Header/Header';
import FooterNav from './components/FooterNav/FooterNav';
import ProfileInfo from './components/Profile/ProfileInfo';
import CalculatorPage from './pages/CalculatorPage'; 
import Login from './components/Login/Login';
import ExercisePage from './pages/ExercisePage';
import SleepPage from './pages/SleepLogPage'



function App() {

  const [showLogin,setshowLogin] = useState(false)
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };


  return (
    <>
    {showLogin?<Login setshowLogin={setshowLogin}/>:<></>}
      
      <Router>
        <Header toggleTheme={toggleTheme} currentTheme={theme} setshowLogin={setshowLogin} />
        <Routes>
          <Route path="/" element={<DashboardPage  />} />
          <Route path="/food-log" element={<FoodLog />} />
          <Route path="/profile" element={<ProfileInfo />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/exercise" element={<ExercisePage />} />
          <Route path="/sleep" element={<SleepPage />} />
        </Routes>
        <FooterNav />
      </Router>
    </>
  );
}

export default App;



