// src/components/Calculator/BasicInfo.jsx
import React, { useState } from 'react';

const BasicInfo = ({ nextStep, updateData }) => {
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = () => {
    updateData({ age, sex, height, weight });
    nextStep();
  };

  return (
    <div className="basic-info">
      <h2>Basic Information</h2>
      <form>
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <label>
          Sex:
          <select value={sex} onChange={(e) => setSex(e.target.value)}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          Height (cm):
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
        <label>
          Weight (kg):
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
        <button type="button" onClick={handleSubmit}>Next</button>
      </form>
    </div>
  );
};

export default BasicInfo;
