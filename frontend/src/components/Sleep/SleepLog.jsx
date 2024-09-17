import React, { useState } from 'react';
import SleepEntryForm from './SleepEntryForm';
import './sleepLog.css';

const SleepLog = () => {
  const [sleepLogs, setSleepLogs] = useState([]);

  const addSleepLog = async (sleepData) => {
    try {
      const response = await axios.post("http://localhost:4000/api/sleep-logs", sleepData);
      setSleepLogs([...sleepLogs, response.data]);
    } catch (error) {
      console.error('Error adding sleep log:', error);
    }
  };

  return (
    <div className="sleep-log-container">
      <h2>Your Sleep Log</h2>
      <SleepEntryForm onAddSleep={addSleepLog} />

      <ul className="sleep-log-list">
        {sleepLogs.map((log, index) => (
          <li key={index}>
            <p>Date: {new Date(log.sleepDate).toLocaleString()}</p>
            <p>Duration: {log.sleepDuration} hours</p>
            <p>Quality: {log.quality}</p>
            <p>Notes: {log.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SleepLog;
