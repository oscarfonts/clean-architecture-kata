import type { User } from "../entities/User.ts";
import type { Email } from "../value-objects/Email.ts";

export abstract class UserRepository {
	abstract getUsers(): Array<User>;

	abstract createUser(user: User): User;

	abstract getUserByEmail(email: Email): User | undefined;
}
