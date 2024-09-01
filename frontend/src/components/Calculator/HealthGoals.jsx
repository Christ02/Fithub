// src/components/Calculator/HealthGoals.jsx
import React, { useState } from 'react';

const HealthGoals = ({ nextStep, prevStep, updateData }) => {
  const [goal, setGoal] = useState('');

  const handleSubmit = () => {
    updateData({ goal });
    nextStep();
  };

  return (
    <div className="health-goals">
      <h2>Health Goals</h2>
      <form>
        <label>
          <input
            type="radio"
            value="lose-weight"
            checked={goal === 'lose-weight'}
            onChange={(e) => setGoal(e.target.value)}
          />
          Lose Weight
        </label>
        <label>
          <input
            type="radio"
            value="maintain-weight"
            checked={goal === 'maintain-weight'}
            onChange={(e) => setGoal(e.target.value)}
          />
          Maintain Weight
        </label>
        <label>
          <input
            type="radio"
            value="gain-muscle"
            checked={goal === 'gain-muscle'}
            onChange={(e) => setGoal(e.target.value)}
          />
          Gain Muscle
        </label>
        <button type="button" onClick={prevStep}>Back</button>
        <button type="button" onClick={handleSubmit}>Next</button>
      </form>
    </div>
  );
};

export default HealthGoals;
