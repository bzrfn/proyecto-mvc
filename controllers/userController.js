import User from '../models/User.js';

export const createUser = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        message: 'El nombre es obligatorio'
      });
    }

    const user = User.create(name);

    res.status(201).json({
      message: 'Usuario creado',
      data: user
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};