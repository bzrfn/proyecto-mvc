import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mundo desde MVC');
});

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Escuchando desde el puerto ${PORT}`);
});