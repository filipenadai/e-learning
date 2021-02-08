import express from 'express';

import usersRouter from './users.routes';
import sessionRouter from './sessions.routes';

const router = express.Router();

router.use('/users', usersRouter);
router.use('/sessions', sessionRouter);

export default router;
