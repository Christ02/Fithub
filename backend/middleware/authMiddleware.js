// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  // Obtener el token del encabezado de autorización
  const token = req.header('Authorization');
  
  // Verificar si el token no existe
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verificar el token usando JWT
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    
    // Agregar el usuario decodificado al objeto req
    req.user = decoded;

    // Continuar con la siguiente función
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;
