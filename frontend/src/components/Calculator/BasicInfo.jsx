import React from 'react';
import CustomDatePicker from '../CustomDatePicker'; // Importa tu componente personalizado

const BasicInfo = ({ nextStep, handleInputChange, formData }) => {
  const { birthDate, gender, height, weight } = formData;

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age;
  };

  const handleDateChange = (date) => {
    const age = calculateAge(date);
    handleInputChange('age')({ target: { value: age } });
    handleInputChange('birthDate')({ target: { value: date } });
  };

  return (
    <div className="calculator-section">
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: '20%' }}></div>
      </div>
      <h2>Basic Information</h2>
      <form className="calculator-form">
        <div className="form-group">
          <label>Date of Birth:</label>
          <CustomDatePicker
            selectedDate={new Date(birthDate)} 
            onChange={handleDateChange} 
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <select value={gender} onChange={handleInputChange('gender')} required>
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label>Height (cm):</label>
          <input 
            type="number" 
            value={height} 
            onChange={handleInputChange('height')}
            min="0"
            max="250"
            required
          />
        </div>

        <div className="form-group">
          <label>Weight (kg):</label>
          <input 
            type="number" 
            value={weight} 
            onChange={handleInputChange('weight')}
            min="0"
            max="300"
            required
          />
        </div>

        <button type="button" className="next-button" onClick={nextStep}>Next</button>
      </form>
    </div>
  );
};

export default BasicInfo;
