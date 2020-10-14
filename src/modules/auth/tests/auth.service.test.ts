import { verify } from 'jsonwebtoken';
import { use, expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { authenticate } from 'modules/auth/auth.service';
import authConfig from 'config/auth';

use(chaiAsPromised);

describe('Auth Service', () => {
  it('should throw an error if the combination is wrong', async () => {
    expect(
      authenticate('wrong@email.com', 'wrongpassword'),
    ).to.eventually.throw(new Error('Incorrect email/password combination'));
  });

  it('should return a valid token and an email if the combination is right', async () => {
    const emailSent = 'gustavo@teste.com';
    const { email, token } = await authenticate(emailSent, '123456');
    expect(email).to.eq(emailSent);
    expect(() => verify(token, authConfig.jwt.secret)).to.not.throw(Error);
  });
});
