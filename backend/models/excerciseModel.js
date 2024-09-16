// models/ExerciseLogModel.js
import mongoose from 'mongoose';

const ExerciseLogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number, // Duración en minutos
    required: true,
  },
  caloriesBurned: {
    type: Number, // Calorías quemadas
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Relacionar con el usuario que hizo el ejercicio
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const ExerciseLogModel = mongoose.model('ExerciseLog', ExerciseLogSchema);

export default ExerciseLogModel;
