import React, { useState } from 'react';
import './ExerciseTracker.css';

const ExerciseTracker = () => {
  const [exerciseType, setExerciseType] = useState('');
  const [duration, setDuration] = useState('');
  const [exerciseLog, setExerciseLog] = useState([]);

  const handleAddExercise = () => {
    if (exerciseType && duration) {
      setExerciseLog([...exerciseLog, { exerciseType, duration }]);
      setExerciseType('');
      setDuration('');
    }
  };

  return (
    <div className="tracker-container">
      <h2 className="tracker-title">Exercise Tracker</h2>
      <div className="input-group">
        <input 
          type="text" 
          placeholder="Exercise Type" 
          value={exerciseType}
          onChange={(e) => setExerciseType(e.target.value)} 
          className="input-field"
        />
        <input 
          type="number" 
          placeholder="Duration (minutes)" 
          value={duration}
          onChange={(e) => setDuration(e.target.value)} 
          className="input-field"
        />
        <button onClick={handleAddExercise} className="tracker-button">Add</button>
      </div>
      <ul className="tracker-log">
        {exerciseLog.map((log, index) => (
          <li key={index} className="tracker-log-item">
            {log.exerciseType}: {log.duration} minutes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseTracker;
