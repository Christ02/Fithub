// src/components/Profile/ProfileInfo.jsx
import React, { useState } from 'react';
import './ProfileInfo.css';

const ProfileInfo = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(70);

  const handleSave = () => {
    // Lógica para guardar la información
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile-info">
      <h3>Basic Information</h3>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Height (cm):
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
        <label>
          Weight (kg):
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
        <button type="button" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default ProfileInfo;
