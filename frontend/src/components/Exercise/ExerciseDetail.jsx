import React from 'react';

const ExerciseDetail = ({ exercise }) => {
  return (
    <div className="exercise-detail">
      <h3>Exercise Details</h3>
      <p><strong>Type:</strong> {exercise.type}</p>
      <p><strong>Duration:</strong> {exercise.duration} mins</p>
      <p><strong>Calories Burned:</strong> {exercise.caloriesBurned} kcal</p>
    </div>
  );
};

export default ExerciseDetail;
