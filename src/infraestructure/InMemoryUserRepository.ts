import {User} from '../domain/entities/User.ts';
import {Email} from '../domain/value-objects/Email.ts';
import {UserRepository} from '../domain/repositories/UserRepository.ts';

const users: Array<User> = [];

export class InMemoryUserRepository extends UserRepository {
  createUser(user: User): User {
    users.push(user);
    return user;
  }

  getUsers(): Array<User> {
    return users;
  }

  getUserByEmail(email: Email): User | undefined {
    return users.find(u => u.getEmail().equals(email));
  }
}
