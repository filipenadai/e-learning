import express, { Request, Response } from 'express';

const usersRouter = express.Router();

usersRouter.post('/', (request: Request, response: Response) => {
  response.json({ ok: true });
});

export default usersRouter;
