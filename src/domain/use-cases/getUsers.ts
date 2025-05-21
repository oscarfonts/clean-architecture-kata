import type { User } from "../entities/User.ts";
import type { UserRepository } from "../repositories/UserRepository.ts";

export type GetUsers = () => Array<User>;

export const getUsers =
	({ repository }: { repository: UserRepository }) =>
	(): Array<User> => {
		return repository.getUsers();
	};
