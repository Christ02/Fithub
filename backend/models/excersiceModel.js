const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User' 
  },
  exerciseName: {
    type: String,
    required: true,
  },
  duration: {
    type: Number, 
    required: true,
  },
  caloriesBurned: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
