import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ExerciseLog.css';

const ExerciseLog = () => {
  const [exercises, setExercises] = useState([]);
  const [newExercise, setNewExercise] = useState({
    name: '',
    duration: '',
  });

  // Obtener ejercicios desde el backend
  const fetchExercises = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/exercises');
      setExercises(response.data);
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  };

  // Manejar el cambio de inputs en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExercise({ ...newExercise, [name]: value });
  };

  // Enviar nuevo ejercicio al backend
  const handleAddExercise = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/exercises', newExercise);
      setExercises(response.data.exercises); // Actualizar la lista de ejercicios
      setNewExercise({ name: '', duration: '' }); // Limpiar formulario
    } catch (error) {
      console.error('Error adding exercise:', error);
    }
  };

  // Llamada inicial para obtener los ejercicios
  useEffect(() => {
    fetchExercises();
  }, []);

  return (
    <div className="exercise-log">
      <h2>Exercise Log</h2>

      {/* Listado de ejercicios */}
      <div className="exercise-log-content">
        {exercises.map((exercise, index) => (
          <div key={index} className="exercise-entry">
            <p>{exercise.name} - {exercise.duration} minutes</p>
          </div>
        ))}
      </div>

      {/* Formulario para agregar ejercicio */}
      <form onSubmit={handleAddExercise} className="add-exercise-form">
        <input
          type="text"
          name="name"
          value={newExercise.name}
          onChange={handleInputChange}
          placeholder="Exercise name"
          required
        />
        <input
          type="number"
          name="duration"
          value={newExercise.duration}
          onChange={handleInputChange}
          placeholder="Duration (minutes)"
          required
        />
        <button type="submit">Add Exercise</button>
      </form>
    </div>
  );
};

export default ExerciseLog;
