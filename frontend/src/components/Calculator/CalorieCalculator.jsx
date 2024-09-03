import React, { useState } from 'react';
import BasicInfo from './BasicInfo';
import ActivityLevel from './ActivityLevel';
import HealthGoals from './HealthGoals';
import Result from './Result';
import './CalorieCalculator.css';

const CalorieCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    birthDate: '',
    gender: '',
    height: '',
    weight: '',
    activityLevel: '',
    healthGoals: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleInputChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };
  switch (step) {
    case 1:
      return <BasicInfo nextStep={nextStep} handleInputChange={handleInputChange} formData={formData} />;
    case 2:
      return <ActivityLevel nextStep={nextStep} prevStep={prevStep} handleInputChange={handleInputChange} formData={formData} />;
    case 3:
      return <HealthGoals nextStep={nextStep} prevStep={prevStep} handleInputChange={handleInputChange} formData={formData} />;
    case 4:
      return <Result prevStep={prevStep} formData={formData} />;
    default:
      return <BasicInfo nextStep={nextStep} handleInputChange={handleInputChange} formData={formData} />;
  }
};

export default CalorieCalculator;



/*import React, { useState } from 'react';
import BasicInfo from './BasicInfo';
import ActivityLevel from './ActivityLevel';
import HealthGoals from './HealthGoals';
import Result from './Result';
import './CalorieCalculator.css';

const CalorieCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    birthDate: '',
    gender: '',
    height: '',
    weight: '',
    activityLevel: '',
    healthGoals: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleInputChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return <BasicInfo nextStep={nextStep} handleInputChange={handleInputChange} formData={formData} />;
    case 2:
      return <ActivityLevel nextStep={nextStep} prevStep={prevStep} handleInputChange={handleInputChange} formData={formData} />;
    case 3:
      return <HealthGoals nextStep={nextStep} prevStep={prevStep} handleInputChange={handleInputChange} formData={formData} />;
    case 4:
      return <Result prevStep={prevStep} formData={formData} />;
    default:
      return <BasicInfo nextStep={nextStep} handleInputChange={handleInputChange} formData={formData} />;
  }
};

export default CalorieCalculator;
*/