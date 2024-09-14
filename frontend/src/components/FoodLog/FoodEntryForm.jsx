import React, { useState } from 'react';
import axios from 'axios';

const FoodEntryForm = ({ onAddFood }) => {
  const [foodItem, setFoodItem] = useState('');
  const [calories, setCalories] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fat, setFat] = useState('');
  const [protein, setProtein] = useState('');
  const [sodium, setSodium] = useState('');
  const [sugar, setSugar] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/foods/nutrition", { name: foodItem });
      const foodInfo = response.data[0];

      if (foodInfo) {
        setCalories(foodInfo.nf_calories);
        setCarbs(foodInfo.nf_total_carbohydrate);
        setFat(foodInfo.nf_total_fat);
        setProtein(foodInfo.nf_protein);
        setSodium(foodInfo.nf_sodium);
        setSugar(foodInfo.nf_sugars);
      } else {
        console.error('Food not found');
      }
    } catch (error) {
      console.error('Error fetching food data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foodData = { foodItem, calories, carbs, fat, protein, sodium, sugar };

    onAddFood(foodData);

    // Reset form after submission
    setFoodItem('');
    setCalories('');
    setCarbs('');
    setFat('');
    setProtein('');
    setSodium('');
    setSugar('');
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
      <button type="button" onClick={handleSearch}>Search Food</button>

      {calories && (
        <div>
          <p>Calories: {calories}</p>
          <p>Carbs: {carbs}g</p>
          <p>Fat: {fat}g</p>
          <p>Protein: {protein}g</p>
          <p>Sodium: {sodium}mg</p>
          <p>Sugar: {sugar}g</p>
        </div>
      )}

      <button type="submit">Add Food</button>
    </form>
  );
};

export default FoodEntryForm;
