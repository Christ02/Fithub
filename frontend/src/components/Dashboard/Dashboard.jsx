import React from 'react';
import DailySummary from './DailySummary';
import ActivityOverview from './ActivityOverview';
import SleepOverview from './SleepOverview';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="summary-header">
        <h2>Welcome Back!</h2>
        <p className="summary-subtitle">Here's your summary for today. Keep up the great work!</p>
      </div>
      <DailySummary />
      <ActivityOverview />
      <SleepOverview />
    </div>
  );
};

export default Dashboard;
