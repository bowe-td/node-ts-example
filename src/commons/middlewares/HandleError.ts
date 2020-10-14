import { CustomRequest, CustomResponse } from 'commons/interfaces';
import CustomException from 'commons/exceptions/CustomException';
import logger from 'config/logger';
import { NextFunction } from 'express';

export default (
  error: CustomException,
  req: CustomRequest,
  res: CustomResponse,
  next: NextFunction,
): void => {
  const { code = 500, message, details } = error;

  logger.log({
    level: 'error',
    message: error.message,
    details: error.details,
  });

  res.status(code).send({ error: true, message, details });
  next();
};
