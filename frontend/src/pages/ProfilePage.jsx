// src/pages/ProfilePage.jsx
import React from 'react';
import ProfileInfo from '../components/Profile/ProfileInfo';
import ProgressPhotos from '../components/Profile/ProgressPhotos';
import Measurements from '../components/Profile/Measurements';
import { Link } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <h2>User Profile</h2>
      <ProfileInfo />
      <ProgressPhotos />
      <Measurements />
      <div className="profile-tools">
        <h3>Tools</h3>
        <Link to="/calculator" className="tool-link">Calorie Calculator</Link> 
      </div>
    </div>
  );
};

export default ProfilePage;
