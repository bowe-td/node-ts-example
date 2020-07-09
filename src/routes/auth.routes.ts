import { Router } from 'express';
import BadRequest from '../exceptions/BadRequestException'

import AuthService from '../services/AuthService';

const authRouter = Router();

authRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authService = new AuthService();

    const { email: user, token } = await authService.execute({
      email,
      password,
    });

    return response.json({ user, token });
  }catch(e) {
    const error = new BadRequest(e)
    return response.status(error.code).json(error)
  }
});

export default authRouter;
