import React from 'react';
import DailySummary from './DailySummary';
import ActivityOverview from './ActivityOverview';
import SleepOverview from './SleepOverview';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Today's Summary</h2>
      <DailySummary />
      <ActivityOverview />
      <SleepOverview />
    </div>
  );
};

export default Dashboard;
