import React from 'react';

const Result = ({ formData, prevStep }) => {
  const { gender, height, weight, activityLevel, healthGoals } = formData;

  const calculateTDEE = () => {
    const age = calculateAge(formData.birthDate);
    let BMR;

    if (gender === 'male') {
      BMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      BMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const activityMultiplier = getActivityMultiplier(activityLevel);
    return Math.round(BMR * activityMultiplier);
  };

  const getActivityMultiplier = (activityLevel) => {
    switch (activityLevel) {
      case 'sedentary':
        return 1.2;
      case 'lightly active':
        return 1.375;
      case 'moderately active':
        return 1.55;
      case 'very active':
        return 1.725;
      case 'extra active':
        return 1.9;
      default:
        return 1.2;
    }
  };

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

  const tdee = calculateTDEE();

  const calculateMacros = () => {
    const protein = Math.round((weight * 2)); // Gramos de proteína por kg de peso corporal
    const fat = Math.round((tdee * 0.25) / 9); // 25% de las calorías en grasa
    const carbs = Math.round((tdee - (protein * 4 + fat * 9)) / 4); // Resto en carbohidratos
    return { protein, fat, carbs };
  };

  const macros = calculateMacros();

  return (
    <div className="calculator-section">
      <h2>Your Recommended Daily Intake</h2>
      <p><strong>Total Daily Energy Expenditure (TDEE):</strong> {tdee} kcal</p>
      
      <h3>Macronutrient Breakdown</h3>
      <div className="macro-container">
        <div className="macro-box">
          <h4>Protein</h4>
          <p>{macros.protein}g</p>
        </div>
        <div className="macro-box">
          <h4>Fat</h4>
          <p>{macros.fat}g</p>
        </div>
        <div className="macro-box">
          <h4>Carbohydrates</h4>
          <p>{macros.carbs}g</p>
        </div>
      </div>
      
      <div className="button-group">
        <button className="prev-button" onClick={prevStep}>Previous</button>
      </div>
    </div>
  );
};

export default Result;
