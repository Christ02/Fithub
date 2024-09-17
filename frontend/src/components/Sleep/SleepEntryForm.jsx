import React, { useState } from 'react';
import axios from 'axios';
import './sleepEntryForm.css';

const SleepEntryForm = ({ onAddSleep }) => {
  const [sleepDate, setSleepDate] = useState('');
  const [sleepDuration, setSleepDuration] = useState('');
  const [quality, setQuality] = useState('');  // Se calculará automáticamente
  const [notes, setNotes] = useState('');

  const calculateSleepQuality = (duration) => {
    if (duration >= 7 && duration <= 9) {
      setQuality('Good');
    } else if (duration > 5 && duration < 7) {
      setQuality('Moderate');
    } else {
      setQuality('Poor');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calcular calidad del sueño
    calculateSleepQuality(sleepDuration);

    // Datos de entrada
    const sleepData = { sleepDate, sleepDuration, quality, notes };

    // Enviar los datos al componente padre
    onAddSleep(sleepData);

    // Resetear el formulario
    setSleepDate('');
    setSleepDuration('');
    setNotes('');
  };

  return (
    <form onSubmit={handleSubmit} className="sleep-entry-form">
      <input 
        type="datetime-local" 
        placeholder="Sleep Date" 
        value={sleepDate}
        onChange={(e) => setSleepDate(e.target.value)}
        required
      />

      <input 
        type="number" 
        placeholder="Duration (hours)" 
        value={sleepDuration}
        onChange={(e) => setSleepDuration(e.target.value)}
        min="0"
        max="24"
        required
      />

      <textarea 
        placeholder="Notes (optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <button type="submit">Add Sleep Log</button>

      {quality && (
        <div className="quality-result">
          <p>Calculated Sleep Quality: {quality}</p>
        </div>
      )}
    </form>
  );
};

export default SleepEntryForm;
