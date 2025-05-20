import {User} from '../entities/User.ts';
import {UserRepository} from '../repositories/UserRepository.ts';

export function createUser({repository, user}: { repository: UserRepository, user: User }): User {
  if (repository.getUserByEmail(user.getEmail())) {
    throw new Error('An user with this email already exists');
  }

  return repository.createUser(user);
}
