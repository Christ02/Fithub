import mongoose from "mongoose"

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://fithub:87654321@cluster0.t4osq.mongodb.net/Fithub').then(()=>console.log("DB Connected"));
}