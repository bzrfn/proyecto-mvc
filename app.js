import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.js';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a MongoDB Atlas
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Proyecto MVC conectado a MongoDB Atlas');
});

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Escuchando desde el puerto ${PORT}`);
});



