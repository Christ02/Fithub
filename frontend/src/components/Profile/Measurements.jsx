// src/components/Profile/Measurements.jsx
import React, { useState } from 'react';
import './Measurements.css';

const Measurements = () => {
  const [chest, setChest] = useState(90);
  const [waist, setWaist] = useState(75);
  const [hips, setHips] = useState(95);

  const handleSave = () => {
    // Lógica para guardar las medidas
    alert('Measurements updated successfully!');
  };

  return (
    <div className="measurements">
      <h3>Measurements</h3>
      <form>
        <label>
          Chest (cm):
          <input type="number" value={chest} onChange={(e) => setChest(e.target.value)} />
        </label>
        <label>
          Waist (cm):
          <input type="number" value={waist} onChange={(e) => setWaist(e.target.value)} />
        </label>
        <label>
          Hips (cm):
          <input type="number" value={hips} onChange={(e) => setHips(e.target.value)} />
        </label>
        <button type="button" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default Measurements;
