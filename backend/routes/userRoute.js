/*Las rutas definen los endpoints de tu API, que en este caso serán para registro, login y otros métodos de autenticación. Cada ruta recibe las peticiones del frontend y llama a los controladores correspondientes para realizar las operaciones.*/

import express from "express"
import { loginUser, registerUser } from "../controllers/userController.js"


const userRouter = express.Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)

//router.get('/profile', getUserProfile);  // Ejemplo de ruta protegida

export default userRouter;
