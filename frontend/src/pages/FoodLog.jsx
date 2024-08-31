import React, { useState } from 'react';
import Header from '../components/Header/Header';
import FooterNav from '../components/FooterNav/FooterNav';
import './FoodLog.css';

const FoodLog = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

    const formatDate = (dateString) => {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    };
  
    const handleDateChange = (event) => {
      setSelectedDate(event.target.value);
    };
  

  return (
    <div className="food-log">
      <div className="food-log-content">
        <h2>Your Meal Log for:</h2>
        <div className="date-picker">
          <span>{formatDate(selectedDate)}</span>
          <input 
            type="date" 
            value={selectedDate} 
            onChange={handleDateChange} 
          />
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
        <div className="nutrient-summary">
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
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>1,790</td>
                <td>224</td>
                <td>60</td>
                <td>90</td>
                <td>2,300</td>
                <td>67</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FoodLog;
