import { NextFunction } from 'express';
import { Schema } from 'joi';
import { CustomRequest, CustomResponse } from 'commons/interfaces';
import CustomValidationException from 'commons/exceptions/CustomValidationException';

export default (schema: Schema) => (
  req: CustomRequest,
  res: CustomResponse,
  next: NextFunction,
): void => {
  try {
    const { body } = req;
    const validated = schema.validate(body);

    if (!validated.error) {
      next();
    } else {
      throw new CustomValidationException(
        'Erro de validação',
        validated.error.details,
      );
    }
  } catch (e) {
    next(e);
  }
};
