// src/components/Calculator/Result.jsx
import React from 'react';

const Result = ({ data, prevStep }) => {
  const calculateCalories = () => {
    // Implementa la lógica para calcular las calorías basadas en los datos
    return 2000; // Este es solo un valor de ejemplo
  };

  const result = calculateCalories();

  return (
    <div className="result">
      <h2>Your Recommended Daily Caloric Intake</h2>
      <p>{result} calories per day</p>
      <button type="button" onClick={prevStep}>Back</button>
    </div>
  );
};

export default Result;
