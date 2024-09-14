import mongoose from "mongoose"

const FoodLogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  carbs: { type: Number, required: true },
  fat: { type: Number, required: true },
  protein: { type: Number, required: true },
  sodium: { type: Number, required: true },
  sugar: { type: Number, required: true },
  });
  
const FoodLog = mongoose.models.FoodLog || mongoose.model("FoodLog", FoodLogSchema);

export default FoodLog;