// src/components/Profile/ProfileInfo.jsx
import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Importa SweetAlert2
import './ProfileInfo.css';

const ProfileInfo = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
  
  const handleSave = () => {
    // Aquí puedes agregar la lógica para guardar la información
    Swal.fire({
      title: 'Profile Updated!',
      text: 'Your profile information has been successfully updated.',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
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
