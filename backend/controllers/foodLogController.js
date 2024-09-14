import FoodLogModel from '../models/FoodLogModel.js';
import axios from "axios"


// Función para manejar la solicitud de nutrición
const getFoodNutrition = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  try {
    // Llamada a la API externa para obtener la información nutricional
    const response = await axios.post('https://trackapi.nutritionix.com/v2/natural/nutrients', 
        { query: name },
        {
          headers: {
            'x-app-id': process.env.NUTRITIONIX_APP_ID,
            'x-app-key': process.env.NUTRITIONIX_API_KEY,
            'Content-Type': 'application/json'
          }
        }
      );
  
      const foodData = response.data.foods;
  

      if (!foodData || foodData.length === 0) {
        return res.status(404).json({ error: 'Food not found' });
      }
      
      // Almacenar los datos en la base de datos usando el modelo FoodLog
      const newFoodLog = new FoodLogModel({
        name: foodData[0].food_name,
        calories: foodData[0].nf_calories,
        carbs: foodData[0].nf_total_carbohydrate,
        fat: foodData[0].nf_total_fat,
        protein: foodData[0].nf_protein,
        sodium: foodData[0].nf_sodium,
        sugar: foodData[0].nf_sugars
      });

      await newFoodLog.save();

      res.status(200).json(foodData);
    } catch (error) {
      console.error('Error fetching food nutrition:', error);
      res.status(500).json({ error: 'Failed to fetch food nutrition' });
    }
  };

export default {
  getFoodNutrition
};

