// src/components/FoodLog/NutritionalSummary.jsx
import React, { useState } from 'react';
import './nutritionalSummary.css'

const NutritionalSummary = ({ foods }) => {
  const [setFoods] = useState(foods);

  const totalCalories = foods.reduce((total, food) => total + parseFloat(food.calories || 0), 0);
  const totalCarbs = foods.reduce((total, food) => total + parseFloat(food.carbs || 0), 0);
  const totalFat = foods.reduce((total, food) => total + parseFloat(food.fat || 0), 0);
  const totalProtein = foods.reduce((total, food) => total + parseFloat(food.protein || 0), 0);
  const totalSodium = foods.reduce((total, food) => total + parseFloat(food.sodium || 0), 0);
  const totalSugar = foods.reduce((total, food) => total + parseFloat(food.sugar || 0), 0);

  const handleClear = () => {
    setFoods([]);
  };

  return (
    <div className="nutritional-summary">
      <h3>Nutritional Summary</h3>
      <table>
        <thead>
          <tr>
            <th>Calories</th>
            <th>Carbs</th>
            <th>Fat</th>
            <th>Protein</th>
            <th>Sodium</th>
            <th>Sugar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{totalCalories}</td>
            <td>{totalCarbs}g</td>
            <td>{totalFat}g</td>
            <td>{totalProtein}g</td>
            <td>{totalSodium}mg</td>
            <td>{totalSugar}g</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleClear} className='clearButton'>Clear</button>
    </div>
  );
};

export default NutritionalSummary;

