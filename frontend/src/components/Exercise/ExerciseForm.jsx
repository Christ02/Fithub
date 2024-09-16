import React, { useState } from 'react';
import axios from 'axios';

const ExerciseForm = ({ userId, onExerciseAdded }) => {
  const [exerciseData, setExerciseData] = useState({
    name: '',
    duration: '',
    caloriesBurned: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExerciseData({ ...exerciseData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/exercises', {
        userId,
        ...exerciseData
      });
      onExerciseAdded(response.data);
    } catch (error) {
      console.error('Error adding exercise:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Exercise Name:
        <input type="text" name="name" value={exerciseData.name} onChange={handleInputChange} required />
      </label>
      <label>
        Duration (minutes):
        <input type="number" name="duration" value={exerciseData.duration} onChange={handleInputChange} required />
      </label>
      <label>
        Calories Burned:
        <input type="number" name="caloriesBurned" value={exerciseData.caloriesBurned} onChange={handleInputChange} />
      </label>
      <button type="submit">Add Exercise</button>
    </form>
  );
};

export default ExerciseForm;
