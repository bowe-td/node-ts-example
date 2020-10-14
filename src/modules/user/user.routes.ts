import { Router } from 'express';
import ValidationHandler from 'commons/middlewares/ValidationHandler';
import { getUsersCtrl } from './user.controller';
import createUserSchema from './user.validation';

const usersRouter = Router();

usersRouter.get('/', getUsersCtrl);

usersRouter.post('/', ValidationHandler(createUserSchema), getUsersCtrl);

export default usersRouter;
