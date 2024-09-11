/*Los modelos representan la estructura de los datos que se manejaran en la base de datos*/ 

import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  }, {minimize: false})

//si el modelo ya se creo lo uso sino crea el modelo
const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;









