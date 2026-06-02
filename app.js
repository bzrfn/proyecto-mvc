import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';

import userRoutes from './routes/user.js';
import connectDB from './config/db.js';
import swaggerSpec from './config/swagger.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a MongoDB Atlas
connectDB();

// Middlewares
app.use(express.json());

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Ruta principal
app.get('/', (req, res) => {
  res.send('Proyecto MVC conectado a MongoDB Atlas');
});

// Rutas API
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Escuchando desde el puerto ${PORT}`);
  console.log(`Swagger disponible en http://localhost:${PORT}/api-docs`);
});