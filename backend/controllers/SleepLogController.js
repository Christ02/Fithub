import SleepLogModel from '../models/SleepLogModel.js';

// Crear un nuevo registro de sueño
export const createSleepLog = async (req, res) => {
  const { sleepDate, sleepDuration, quality, notes } = req.body;

  try {
    const newSleepLog = new SleepLogModel({
      sleepDate,
      sleepDuration,
      quality,
      notes,
    });

    const savedSleepLog = await newSleepLog.save();
    res.status(201).json(savedSleepLog);
  } catch (error) {
    console.error('Error creating sleep log:', error);
    res.status(500).json({ message: 'Error creating sleep log' });
  }
};

// Obtener todos los registros de sueño para un usuario
export const getSleepLogs = async (req, res) => {
  try {
    const sleepLogs = await SleepLogModel.find();
    res.status(200).json(sleepLogs);
  } catch (error) {
    console.error('Error fetching sleep logs:', error);
    res.status(500).json({ message: 'Error fetching sleep logs' });
  }
};
