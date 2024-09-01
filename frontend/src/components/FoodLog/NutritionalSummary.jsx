// src/components/FoodLog/NutritionalSummary.jsx
import React from 'react';

const NutritionalSummary = () => {
  return (
    <div className="nutritional-summary">
      <h3>Nutritional Summary</h3>
      <table>
        <thead>
          <tr>
            <th>Calories</th>
            <th>Carbs</th>
            <th>Fat</th>
            <th>Protein</th>
            <th>Sodium</th>
            <th>Sugar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1800</td>
            <td>250g</td>
            <td>70g</td>
            <td>50g</td>
            <td>2300mg</td>
            <td>90g</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NutritionalSummary;
