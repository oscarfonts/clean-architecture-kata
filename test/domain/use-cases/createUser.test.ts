import {describe, it} from 'node:test';
import assert from 'node:assert';
import {User} from '../../../src/domain/entities/User.ts';
import {Email} from '../../../src/domain/value-objects/Email.ts';
import {createUser} from '../../../src/domain/use-cases/createUser.ts';
import {UserRepository} from '../../../src/domain/repositories/UserRepository.ts';

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


describe('createUser', () => {
  it('crea un usuario', () => {
    const fakeRepo = createFakeRepo([]);
    const sampleUser = User.create(
      {
        id: '1',
        email: 'user@example.com',
        username: 'user',
        password: 'Password123'
      }
    );

    const result = createUser({repository: fakeRepo, user: sampleUser});

    assert.strictEqual(result.equals(sampleUser), true);
  });

  it('no puede crear un usuario con el mismo email que uno existente', () => {
    const sampleUser = User.create(
      {
        id: '1',
        email: 'user@example.com',
        username: 'user',
        password: 'Password123'
      }
    );
    const fakeRepo = createFakeRepo([sampleUser]);

    try {
      createUser({repository: fakeRepo, user: sampleUser});
      assert(false, 'should have thrown an error');
    } catch (e) {
      assert.equal(e.message, 'An user with this email already exists');
    }
  });
});
