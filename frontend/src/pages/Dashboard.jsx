import React from 'react';
import Header from '../components/Header/Header';
import CalorieTracker from '../components/CalorieTracker/CalorieTracker';
import SleepTracker from '../components/SleepTracker/SleepTracker';
import ExerciseTracker from '../components/ExerciseTracker/ExerciseTracker';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header  />
      <div className="dashboard-content">
        <h1 className="dashboard-title">Today's Summary</h1>
        <div className="trackers">
          <CalorieTracker />
          <SleepTracker />
          <ExerciseTracker />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
