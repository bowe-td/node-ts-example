import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const authRouter = Router();
const controller = new AuthController();

authRouter.post('/', controller.authUser);

export default authRouter;
