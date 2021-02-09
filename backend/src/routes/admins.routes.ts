import express from 'express';

import TransformUserToAdminService from '../services/TransformUserToAdminService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const adminsRouter = express.Router();

adminsRouter.use(ensureAuthenticated);

adminsRouter.put('/', async (request, response) => {
  const { user_id } = request.body;

  const transformUserToAdminService = new TransformUserToAdminService();

  const user = await transformUserToAdminService.execute({ user_id });

  return response.json({ user });
});

export default adminsRouter;
