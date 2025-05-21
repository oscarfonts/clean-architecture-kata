import { describe, it } from 'node:test';
import assert from 'node:assert';
import { User } from '../../src/domain/entities/User.ts';
import { InMemoryUserRepository } from '../../src/infrastructure/InMemoryUserRepository.ts';

describe('inMemoryUserRepository', () => {
  it('recupera un usuario añadido anteriormente por su email', () => {
    const repository = new InMemoryUserRepository();
    const user: User = User.create({
      id: '1',
      email: 'user@example.com',
      username: 'user',
      password: 'Password123'
    });

    repository.createUser(user);

    assert(repository.getUserByEmail(user.getEmail()).equals(user));
  });

  it('recupera un conjunto de usuarios añadidos anteriormente', () => {
    const repository = new InMemoryUserRepository();
    const users: Array<User> = [
      User.create({
        id: '2',
        email: 'user2@example.com',
        username: 'user2',
        password: 'Password123'
      }),
      User.create({
        id: '3',
        email: 'user3@example.com',
        username: 'user3',
        password: 'Password123'
      })
    ];
    users.map(repository.createUser);

    const repoUsers = repository.getUsers();

    assert.equal(users.every(user => repoUsers.includes(user)), true);
  });

});
