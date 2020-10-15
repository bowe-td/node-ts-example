import { CustomRequest, CustomResponse } from 'commons/interfaces';
import { NextFunction } from 'express';
import { authenticate } from './auth.service';

export async function authUser(
  request: CustomRequest,
  response: CustomResponse,
  next: NextFunction,
): Promise<void> {
  try {
    const { email, password } = request.body;

    const auth = await authenticate(email, password);

    response.send(auth);
  } catch (e) {
    next(e);
  }
}
