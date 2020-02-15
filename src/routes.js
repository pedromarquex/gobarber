import { Router } from 'express';
import User from './app/models/User'

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Pedro Marques',
    email: 'pedro@ufpi.edu.br',
    password_hash: '123123123',
  })
  return res.json(user);
});

export default routes;
