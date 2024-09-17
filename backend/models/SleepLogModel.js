import mongoose from 'mongoose';

const sleepLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  sleepDate: {
    type: Date,
    required: true,
  },
  sleepDuration: {
    type: Number, // Hours slept
    required: true,
  },
  sleepQuality: {
    type: String, // E.g., 'Good', 'Moderate', 'Poor'
    required: true,
  },
  notes: {
    type: String,
    default: '',
  },
});

const SleepLog = mongoose.model('SleepLog', sleepLogSchema);
export default SleepLog;
