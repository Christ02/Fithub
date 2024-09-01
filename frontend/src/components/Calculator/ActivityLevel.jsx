import React from 'react';

const ActivityLevel = ({ nextStep, prevStep, handleInputChange, formData }) => {
  const { activityLevel } = formData;

  return (
    <div className="calculator-section">
      <h2>Activity Level</h2>
      <form className="calculator-form">
        <div className="form-group">
          <label>Select your activity level:</label>
          <select value={activityLevel} onChange={handleInputChange('activityLevel')} required>
            <option value="">Select...</option>
            <option value="sedentary">Sedentary</option>
            <option value="lightly active">Lightly Active</option>
            <option value="moderately active">Moderately Active</option>
            <option value="very active">Very Active</option>
            <option value="super active">Super Active</option>
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

export default ActivityLevel;
