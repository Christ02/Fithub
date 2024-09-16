// routes/exerciseRoute.js
import express from 'express';
import ExerciseLogController from '../controllers/ExerciseLogController.js';

const router = express.Router();

// Ruta para añadir un nuevo ejercicio
router.post('/add', ExerciseLogController.addExercise);

// Ruta para obtener los ejercicios de un usuario específico
router.get('/:userId', ExerciseLogController.getExerciseLogs);

export default router;
