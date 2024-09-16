const express = require('express');
const router = express.Router();
const {
  getExercises,
  addExercise,
  deleteExercise,
} = require('../controllers/exerciseController');

router.get('/:userId', getExercises);       
router.post('/', addExercise);              
router.delete('/:id', deleteExercise);      

module.exports = router;
