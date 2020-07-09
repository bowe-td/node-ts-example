import { sign } from 'jsonwebtoken';

import authConfig from '../config/auth';

interface Request {
  email: string;
  password: string;
}

interface Response {
  email: string;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    // valida se usuario esta correto
    if (email !== 'gustavo@teste.com' || password !== '123456') {
      throw new Error('Incorrect email/password combination');
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: email,
      expiresIn,
    });

    return { email, token };
  }
}

export default AuthenticateUserService;
