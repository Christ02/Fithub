import React, { useState } from 'react';
import './SleepTracker.css';

const SleepTracker = () => {
  const [sleepHours, setSleepHours] = useState('');
  const [sleepLog, setSleepLog] = useState([]);

  const handleAddSleep = () => {
    if (sleepHours) {
      setSleepLog([...sleepLog, sleepHours]);
      setSleepHours('');
    }
  };

  const calculateSleepQuality = () => {
    const totalSleep = sleepLog.reduce((a, b) => a + b, 0);
    const averageSleep = totalSleep / sleepLog.length;
    if (averageSleep >= 7) return 'Good';
    if (averageSleep >= 5) return 'Fair';
    return 'Poor';
  };

  return (
    <div className="tracker-container">
      <h2 className="tracker-title">Sleep Tracker</h2>
      <div className="input-group">
        <input 
          type="number" 
          placeholder="Hours Slept" 
          value={sleepHours}
          onChange={(e) => setSleepHours(e.target.value)} 
          className="input-field"
        />
        <button onClick={handleAddSleep} className="tracker-button">Add</button>
      </div>
      <ul className="tracker-log">
        {sleepLog.map((hours, index) => (
          <li key={index} className="tracker-log-item">
            {hours} hours
          </li>
        ))}
      </ul>
      <p className="tracker-summary">Sleep Quality: {calculateSleepQuality()}</p>
    </div>
  );
};

export default SleepTracker;
