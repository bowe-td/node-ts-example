import { ValidationErrorItem } from 'joi';

export default class CustomException extends Error {
  public readonly code: number;

  public readonly details?: ValidationErrorItem[];

  constructor(message: string, code: number) {
    super(message);
    this.message = message;
    this.code = code;
  }
}
