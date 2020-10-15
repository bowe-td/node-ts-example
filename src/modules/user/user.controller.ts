import { CustomRequest, CustomResponse } from 'commons/interfaces';
import { NextFunction } from 'express';
import { getUsers } from './user.dao';

export async function getUsersCtrl(
  request: CustomRequest,
  response: CustomResponse,
  next: NextFunction,
): Promise<void> {
  try {
    const users = await getUsers();

    response.send(users);
  } catch (e) {
    next(e);
  }
}
