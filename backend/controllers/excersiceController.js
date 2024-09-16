const Exercise = require('../models/exerciseModel');

// Get all exercises for a user
exports.getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find({ userId: req.params.userId });
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching exercises', error });
  }
};

// Add a new exercise
exports.addExercise = async (req, res) => {
  const { userId, exerciseName, duration, caloriesBurned } = req.body;

  try {
    const newExercise = new Exercise({
      userId,
      exerciseName,
      duration,
      caloriesBurned,
    });

    const savedExercise = await newExercise.save();
    res.status(201).json(savedExercise);
  } catch (error) {
    res.status(500).json({ message: 'Error adding exercise', error });
  }
};

exports.deleteExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);

    if (!exercise) {
      return res.status(404).json({ message: 'Exercise not found' });
    }

    await exercise.remove();
    res.status(200).json({ message: 'Exercise deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting exercise', error });
  }
};
