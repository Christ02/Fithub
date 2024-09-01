// src/components/FoodLog/FoodEntryForm.jsx
import React, { useState } from 'react';

const FoodEntryForm = () => {
  const [foodItem, setFoodItem] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se manejaría la lógica para guardar la comida
  };

  return (
    <form onSubmit={handleSubmit} className="food-entry-form">
      <input 
        type="text" 
        placeholder="Food Item" 
        value={foodItem}
        onChange={(e) => setFoodItem(e.target.value)}
        required
      />
      <input 
        type="number" 
        placeholder="Calories" 
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        required
      />
      <button type="submit">Add Food</button>
    </form>
  );
};

export default FoodEntryForm;
