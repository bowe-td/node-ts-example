import httpCodes from '../enum/http-codes';
import CustomException from './CustomException';

export default class ForbiddenException extends CustomException {
  constructor(message: string) {
    super(message, httpCodes.FORBIDDEN);
    this.message = message;
  }
}
