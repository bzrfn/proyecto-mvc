import express from 'express';
import { createUser } from '../controllers/userController.js';

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crear usuario
 *     description: Crea un nuevo usuario y lo guarda en MongoDB Atlas.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: Brandon
 *     responses:
 *       201:
 *         description: Usuario creado correctamente
 *       400:
 *         description: El nombre es obligatorio
 *       500:
 *         description: Error interno del servidor
 */
router.post('/', createUser);

export default router;