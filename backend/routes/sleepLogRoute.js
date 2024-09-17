import express from 'express';
import { createSleepLog, getSleepLogs } from '../controllers/SleepLogController.js';

const router = express.Router();

// Crear un nuevo registro de sueño
router.post('/', createSleepLog);

// Obtener todos los registros de sueño
router.get('/', getSleepLogs);

export default router;
