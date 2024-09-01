// src/pages/ProfilePage.jsx
import React from 'react';
import ProfileInfo from '../components/Profile/ProfileInfo';
import ProgressPhotos from '../components/Profile/ProgressPhotos';
import Measurements from '../components/Profile/Measurements';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <h2>User Profile</h2>
      <ProfileInfo />
      <ProgressPhotos />
      <Measurements />
    </div>
  );
};

export default ProfilePage;
