// routes/exerciseRoute.js
import express from 'express';
import ExerciseController from '../controllers/excersiceController.js';

const router = express.Router();

// Ruta para añadir un nuevo ejercicio
router.post('/add', ExerciseController.addExercise);

// Ruta para obtener los ejercicios de un usuario específico
router.get('/:userId', ExerciseController.getExerciseLogs);

export default router;
