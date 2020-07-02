import { Response } from 'express';

interface CustomResponse extends Response {
  handleHttpError?: VoidFunction | any;
}

export default CustomResponse;
