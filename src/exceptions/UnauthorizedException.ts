import httpCodes from '../enum/http-codes';
import CustomException from './CustomException';

export default class UnauthorizedException extends CustomException {
  constructor(message: string) {
    super(message, httpCodes.UNAUTHORIZED);
  }
}
