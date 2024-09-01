// src/components/Profile/ProgressPhotos.jsx
import React, { useState } from 'react';
import './ProgressPhotos.css';

const ProgressPhotos = () => {
  const [photos, setPhotos] = useState([]);

  const handleUpload = (event) => {
    const newPhoto = URL.createObjectURL(event.target.files[0]);
    setPhotos([...photos, newPhoto]);
  };

  return (
    <div className="progress-photos">
      <h3>Progress Photos</h3>
      <input type="file" onChange={handleUpload} />
      <div className="photos-grid">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt="Progress" />
        ))}
      </div>
    </div>
  );
};

export default ProgressPhotos;
