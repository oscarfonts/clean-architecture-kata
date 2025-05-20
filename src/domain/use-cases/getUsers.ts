import {User} from '../entities/User.ts';
import {UserRepository} from '../repositories/UserRepository.ts';

export function getUsers({repository}: { repository: UserRepository }): Array<User> {
  return repository.getUsers();
}
