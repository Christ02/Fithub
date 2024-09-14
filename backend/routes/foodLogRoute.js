import express from "express";
import foodLogController from "../controllers/foodLogController.js";

const router = express.Router();

// Ruta para obtener información nutricional por nombre de comida
router.post('/nutrition', foodLogController.getFoodNutrition);

export default router;
