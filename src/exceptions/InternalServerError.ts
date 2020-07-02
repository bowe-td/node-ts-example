import httpCodes from '../enum/http-codes';
import CustomException from './CustomException';

export default class InternalServerError extends CustomException {
  constructor(message: string) {
    super(message, httpCodes.INTERNAL_SERVER_ERROR);
  }
}
