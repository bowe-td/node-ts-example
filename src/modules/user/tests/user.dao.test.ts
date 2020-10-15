import { testConnect } from 'config/db';
import { expect } from 'chai';
import { getUsers } from 'modules/user/user.dao';

describe('User DAO', () => {
  before((done) => testConnect(done));

  it('should return a list of users', async () => {
    const users = await getUsers();

    expect(users).to.be.an('array');
  });
});
