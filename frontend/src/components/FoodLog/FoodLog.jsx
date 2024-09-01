// src/components/FoodLog/FoodLog.jsx
import React from 'react';
import FoodEntryForm from './FoodEntryForm';
import NutritionalSummary from './NutritionalSummary';
import './FoodLog.css';

const FoodLog = () => {
  return (
    <div className="food-log">
      <div className="food-log-header">
        <h2>Your Meal Log for:</h2>
        <div className="date-picker">
          <span>Friday, August 30, 2024</span>
          <input type="date" />
        </div>
      </div>

      <div className="meal-section">
        <h3>Breakfast</h3>
        <a href="/" className="add-food-link">Add Food</a>
      </div>
      <div className="meal-section">
        <h3>Lunch</h3>
        <a href="/" className="add-food-link">Add Food</a>
      </div>
      <div className="meal-section">
        <h3>Dinner</h3>
        <a href="/" className="add-food-link">Add Food</a>
      </div>
      <div className="meal-section">
        <h3>Snacks</h3>
        <a href="/" className="add-food-link">Add Food</a>
      </div>

      <NutritionalSummary />
    </div>
  );
};

export default FoodLog;
