import httpCodes from '../enum/http-codes';
import CustomException from './CustomException';

export default class BadRequestException extends CustomException {
  constructor(message: string) {
    super(message, httpCodes.BAD_REQUEST);
  }
}
