import test from 'node:test';
import assert from 'node:assert';
import {User} from '../../../src/domain/entities/User.ts';

test('user', (t) => {
  t.test('dos users con el mismo id deberían ser iguales', (t) => {
    const user1 = User.create({
      id: 'id',
      email: '1@1.com',
      username: 'username1',
      password: 'Password123'
    });
    const user2 = User.create({
      id: 'id',
      email: '2@2.com',
      username: 'username2',
      password: 'Password321'
    });
    assert.equal(user1.equals(user2), true);
  });
});
