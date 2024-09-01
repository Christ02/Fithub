import React from 'react';

const HealthGoals = ({ nextStep, prevStep, handleInputChange, formData }) => {
  const { healthGoals } = formData;

  return (
    <div className="calculator-section">
      <h2>Health Goals</h2>
      <form className="calculator-form">
        <div className="form-group">
          <label>Select your health goal:</label>
          <select value={healthGoals} onChange={handleInputChange('healthGoals')} required>
            <option value="">Select...</option>
            <option value="lose weight">Lose Weight</option>
            <option value="maintain weight">Maintain Weight</option>
            <option value="gain muscle">Gain Muscle</option>
            <option value="increase endurance">Increase Endurance</option>
          </select>
        </div>

        <div className="button-group">
          <button type="button" className="prev-button" onClick={prevStep}>Back</button>
          <button type="button" className="next-button" onClick={nextStep}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default HealthGoals;
