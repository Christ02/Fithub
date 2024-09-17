// src/components/FoodLog/FoodLog.jsx
// src/components/FoodLog/FoodLog.jsx
import React, { useState } from 'react';
import FoodEntryForm from './FoodEntryForm';
import NutritionalSummary from './NutritionalSummary';
import './FoodLog.css';

const FoodLog = () => {
  const [foods, setFoods] = useState([]);

  const handleAddFood = (foodData) => {
    setFoods([...foods, foodData]);
  };

  return (
    <div className="food-log">
      <div className="food-log-header">
        <h2>Your Meal Log for:</h2>
        <div className="date-picker">
          <span></span>
          <input type="date" />
        </div>
      </div>

      <div className="meal-section">
        <h3>Breakfast</h3>
        <FoodEntryForm onAddFood={handleAddFood} />
      </div>
      <div className="meal-section">
        <h3>Lunch</h3>
        <FoodEntryForm onAddFood={handleAddFood} />
      </div>
      <div className="meal-section">
        <h3>Dinner</h3>
        <FoodEntryForm onAddFood={handleAddFood} />
      </div>
      <div className="meal-section">
        <h3>Snacks</h3>
        <FoodEntryForm onAddFood={handleAddFood} />
      </div>

      <NutritionalSummary foods={foods} />
    </div>
  );
};

export default FoodLog;

