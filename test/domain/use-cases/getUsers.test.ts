import {describe, it} from 'node:test';
import assert from 'node:assert';
import {User} from '../../../src/domain/entities/User.ts';
import {Email} from '../../../src/domain/value-objects/Email.ts';
import {UserRepository} from '../../../src/domain/repositories/UserRepository.ts';
import {getUsers} from '../../../src/domain/use-cases/getUsers.ts';

const createFakeRepo = (users: Array<User>): UserRepository => {
  return {
    getUsers: function (): Array<User> {
      return users;
    },
    createUser: function (user: User): User {
      return user;
    },
    getUserByEmail: function (email: Email): User | undefined {
      return users[0];
    }
  };
};


describe('getUsers', () => {
  it('obtiene todos los usuarios', () => {
    const sampleUser = User.create(
      {
        id: '1',
        email: 'user@example.com',
        username: 'user',
        password: 'Password123'
      }
    );
    const fakeRepo = createFakeRepo([sampleUser]);

    const results = getUsers({repository: fakeRepo});

    assert.strictEqual(results[0].equals(sampleUser), true);
  });

});
