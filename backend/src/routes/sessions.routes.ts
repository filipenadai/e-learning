import express from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionRouter = express.Router();

sessionRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUserService = new AuthenticateUserService();

  const { user, token } = await authenticateUserService.execute({
    email,
    password,
  });

  return response.json({ user, token });
});

export default sessionRouter;
