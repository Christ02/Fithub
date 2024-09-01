// src/components/Calculator/ActivityLevel.jsx
import React, { useState } from 'react';

const ActivityLevel = ({ nextStep, prevStep, updateData }) => {
  const [activityLevel, setActivityLevel] = useState('');

  const handleSubmit = () => {
    updateData({ activityLevel });
    nextStep();
  };

  return (
    <div className="activity-level">
      <h2>Activity Level</h2>
      <form>
        <label>
          <input
            type="radio"
            value="sedentary"
            checked={activityLevel === 'sedentary'}
            onChange={(e) => setActivityLevel(e.target.value)}
          />
          Sedentary (little or no exercise)
        </label>
        <label>
          <input
            type="radio"
            value="light"
            checked={activityLevel === 'light'}
            onChange={(e) => setActivityLevel(e.target.value)}
          />
          Light (light exercise/sports 1-3 days/week)
        </label>
        <label>
          <input
            type="radio"
            value="moderate"
            checked={activityLevel === 'moderate'}
            onChange={(e) => setActivityLevel(e.target.value)}
          />
          Moderate (moderate exercise/sports 3-5 days/week)
        </label>
        <label>
          <input
            type="radio"
            value="active"
            checked={activityLevel === 'active'}
            onChange={(e) => setActivityLevel(e.target.value)}
          />
          Active (hard exercise/sports 6-7 days a week)
        </label>
        <label>
          <input
            type="radio"
            value="very-active"
            checked={activityLevel === 'very-active'}
            onChange={(e) => setActivityLevel(e.target.value)}
          />
          Very Active (very hard exercise/physical job)
        </label>
        <button type="button" onClick={prevStep}>Back</button>
        <button type="button" onClick={handleSubmit}>Next</button>
      </form>
    </div>
  );
};

export default ActivityLevel;
