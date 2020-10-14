import { Router } from 'express';
import ValidationHandler from 'commons/middlewares/ValidationHandler';
import { authUser } from 'modules/auth/auth.controller';
import authSchema from 'modules/auth/auth.validation';

const authRouter = Router();

authRouter.post('/', ValidationHandler(authSchema), authUser);

export default authRouter;
