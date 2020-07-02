import { Router } from 'express';
import UserController from '../controllers/UserController';
import createUserSchema from '../validation/schemas/UserSchema';
import ValidationHandler from '../middlewares/ValidationHandler';

const usersRouter = Router();
const controller = new UserController();

usersRouter.get('/', controller.getUsers);

usersRouter.post('/', ValidationHandler(createUserSchema), controller.getUsers);

export default usersRouter;
