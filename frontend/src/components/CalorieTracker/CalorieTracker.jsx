import React, { useState } from 'react';
import './CalorieTracker.css';

const CalorieTracker = () => {
  const [meal, setMeal] = useState('');
  const [foodItem, setFoodItem] = useState('');
  const [calories, setCalories] = useState('');

  const [breakfastLog, setBreakfastLog] = useState([]);
  const [lunchLog, setLunchLog] = useState([]);
  const [dinnerLog, setDinnerLog] = useState([]);
  const [snackLog, setSnackLog] = useState([]);

  const handleAddCalories = () => {
    const logEntry = { foodItem, calories };

    if (meal === 'breakfast') {
      setBreakfastLog([...breakfastLog, logEntry]);
    } else if (meal === 'lunch') {
      setLunchLog([...lunchLog, logEntry]);
    } else if (meal === 'dinner') {
      setDinnerLog([...dinnerLog, logEntry]);
    } else if (meal === 'snack') {
      setSnackLog([...snackLog, logEntry]);
    }

    // Limpiar campos
    setMeal('');
    setFoodItem('');
    setCalories('');
  };

  return (
    <div className="tracker-container">
      <h2 className="tracker-title">Calorie Tracker</h2>

      <div className="input-group">
        <select 
          value={meal} 
          onChange={(e) => setMeal(e.target.value)} 
          className="input-field"
        >
          <option value="">Select Meal</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
        </select>
        
        <input 
          type="text" 
          placeholder="Food Item" 
          value={foodItem}
          onChange={(e) => setFoodItem(e.target.value)} 
          className="input-field"
        />
        
        <input 
          type="number" 
          placeholder="Calories" 
          value={calories}
          onChange={(e) => setCalories(e.target.value)} 
          className="input-field"
        />
        
        <button onClick={handleAddCalories} className="tracker-button">Add</button>
      </div>

      <div className="meal-section">
        <h3>Breakfast</h3>
        <ul className="tracker-log">
          {breakfastLog.map((log, index) => (
            <li key={index} className="tracker-log-item">
              {log.foodItem}: {log.calories} cal
            </li>
          ))}
        </ul>
      </div>

      <div className="meal-section">
        <h3>Lunch</h3>
        <ul className="tracker-log">
          {lunchLog.map((log, index) => (
            <li key={index} className="tracker-log-item">
              {log.foodItem}: {log.calories} cal
            </li>
          ))}
        </ul>
      </div>

      <div className="meal-section">
        <h3>Dinner</h3>
        <ul className="tracker-log">
          {dinnerLog.map((log, index) => (
            <li key={index} className="tracker-log-item">
              {log.foodItem}: {log.calories} cal
            </li>
          ))}
        </ul>
      </div>

      <div className="meal-section">
        <h3>Snack</h3>
        <ul className="tracker-log">
          {snackLog.map((log, index) => (
            <li key={index} className="tracker-log-item">
              {log.foodItem}: {log.calories} cal
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalorieTracker;
