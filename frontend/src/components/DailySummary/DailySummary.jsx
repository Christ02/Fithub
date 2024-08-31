import React from 'react';
import './DailySummary.css';

const DailySummary = () => {
  return (
    <div className="daily-summary">
      <div className="summary-header">
        <h2>Tu Resumen Diario</h2>
        <span>1 DÍA CONSECUTIVO</span>
      </div>
      <div className="summary-content">
        <div className="calories-info">
          <h3>Calorías restantes</h3>
          <div className="calories-remaining">
            <span className="calories-number">1790</span>
            <span className="calories-label">Restantes</span>
          </div>
          <button className="add-food-button">Añadir Alimento</button>
        </div>
        <div className="calories-details">
          <div>
            <span>Objetivo</span>
            <strong>1790</strong>
          </div>
          <div>
            <span>Alimentos</span>
            <strong>0</strong>
          </div>
          <div>
            <span>Ejercicio</span>
            <strong>0</strong>
          </div>
          <div>
            <span>Neto</span>
            <strong>0</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailySummary;
