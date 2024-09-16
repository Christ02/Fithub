import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import foodLogRoute from "./routes/foodLogRoute.js"
import "dotenv/config"
// import exerciseRoute from "./routes/exerciseRoute.js"

//app config
const app = express()
const port = 4000

//middlewareS
app.use(express.json())
app.use(cors())

//DB connection
connectDB();


// api Endpoints
app.use("/api/user", userRouter);
app.use("/api/foods", foodLogRoute);
// app.use("/api/exercises", exerciseRoute);


app.get("/", (req, res) => {
    res.send("API working");
});
    // Endpoint POST para obtener datos nutricionales

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
}) //correr el server

//mongodb+srv://fithub:87654321@cluster0.t4osq.mongodb.net/?