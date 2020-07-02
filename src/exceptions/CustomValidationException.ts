import { ValidationErrorItem } from 'joi';
import httpCodes from '../enum/http-codes';
import CustomException from './CustomException';

export default class CustomValidationException extends CustomException {
  details: ValidationErrorItem[];

  constructor(message: string, details: ValidationErrorItem[]) {
    super(message, httpCodes.INTERNAL_SERVER_ERROR);
    this.details = details;
  }
}
