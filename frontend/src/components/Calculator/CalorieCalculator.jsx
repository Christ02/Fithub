// src/components/Calculator/CalorieCalculator.jsx
import React, { useState } from 'react';
import BasicInfo from './BasicInfo';
import ActivityLevel from './ActivityLevel';
import HealthGoals from './HealthGoals';
import DietaryPreferences from './DietaryPreferences';
import Result from './Result';
import './CalorieCalculator.css';

const CalorieCalculator = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    age: '',
    sex: '',
    height: '',
    weight: '',
    activityLevel: '',
    goal: '',
    dietaryPreference: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const updateData = (newData) => setData({ ...data, ...newData });

  return (
    <div className="calorie-calculator">
      {step === 1 && <BasicInfo nextStep={nextStep} updateData={updateData} />}
      {step === 2 && <ActivityLevel nextStep={nextStep} prevStep={prevStep} updateData={updateData} />}
      {step === 3 && <HealthGoals nextStep={nextStep} prevStep={prevStep} updateData={updateData} />}
      {step === 4 && <DietaryPreferences nextStep={nextStep} prevStep={prevStep} updateData={updateData} />}
      {step === 5 && <Result data={data} prevStep={prevStep} />}
    </div>
  );
};

export default CalorieCalculator;
