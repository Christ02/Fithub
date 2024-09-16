// controllers/ExerciseLogController.js
import ExerciseLogModel from '../models/ExerciseLogModel.js';
import axios from "axios";

// Función para manejar la solicitud de un nuevo ejercicio
const addExercise = async (req, res) => {
  const { name, duration, userId } = req.body;

  if (!name || !duration || !userId) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Llamada a una API externa para obtener la cantidad de calorías quemadas (opcional)
    const response = await axios.get('https://example-exercise-api.com/calories', {
      params: { exercise: name, duration }
    });

    const caloriesBurned = response.data.calories || 0; // Ajustar según la respuesta de la API

    // Crear un nuevo registro en la base de datos usando el modelo ExerciseLog
    const newExerciseLog = new ExerciseLogModel({
      name,
      duration,
      caloriesBurned,
      userId
    });

    await newExerciseLog.save();

    res.status(200).json(newExerciseLog);
  } catch (error) {
    console.error('Error fetching exercise data:', error);
    res.status(500).json({ error: 'Failed to add exercise log' });
  }
};

// Función para obtener el registro de ejercicios de un usuario
const getExerciseLogs = async (req, res) => {
  const { userId } = req.params;

  try {
    const exerciseLogs = await ExerciseLogModel.find({ userId });
    res.status(200).json(exerciseLogs);
  } catch (error) {
    console.error('Error fetching exercise logs:', error);
    res.status(500).json({ error: 'Failed to fetch exercise logs' });
  }
};

export default {
  addExercise,
  getExerciseLogs,
};
