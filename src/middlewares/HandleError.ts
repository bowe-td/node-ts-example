import { NextFunction } from 'express';
import { CustomRequest, CustomResponse } from '../interfaces';
import CustomException from '../exceptions/CustomException';
import CustomValidationException from '../exceptions/CustomValidationException';
import logger from '../config/logger';

export default (
  req: CustomRequest,
  res: CustomResponse,
  next: NextFunction,
): void => {
  const handleHttpError = (
    error: CustomValidationException | CustomException,
  ) => {
    const { code = 500, message, details } = error;

    logger.log({
      level: 'error',
      message: error.message,
      details: error.details,
    });

    res.status(code).send({ error: true, message, details });
  };

  res.handleHttpError = handleHttpError;

  next();
};
