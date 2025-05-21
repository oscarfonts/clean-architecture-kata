import type { User } from "../entities/User.ts";
import type { UserRepository } from "../repositories/UserRepository.ts";

export type CreateUser = (user: User) => User;

export const createUser =
	({ repository }: { repository: UserRepository }): CreateUser =>
	(user: User): User => {
		if (repository.getUserByEmail(user.getEmail())) {
			throw new Error("An user with this email already exists");
		}

		return repository.createUser(user);
	};
