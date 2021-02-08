import express from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = express.Router();

usersRouter.post('/', async (request, response) => {
  const { email, name, password, is_admin } = request.body;

  const createUserService = new CreateUserService();

  const user = await createUserService.execute({
    email,
    is_admin,
    name,
    password,
  });

  response.json(user);
});

export default usersRouter;
