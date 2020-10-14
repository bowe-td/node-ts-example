import { sign } from 'jsonwebtoken';

import authConfig from 'config/auth';

interface AuthResponse {
  email: string;
  token: string;
}

export async function authenticate(
  email: string,
  password: string,
): Promise<AuthResponse | never> {
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
