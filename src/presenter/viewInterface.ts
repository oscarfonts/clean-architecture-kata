import type { User } from "../domain/entities/User.ts";

export abstract class ViewInterface {
	abstract hello(): void;
	abstract renderUsersList(users: Array<User>): void;
	abstract renderUserForm(): Promise<{
		username: string;
		email: string;
		password: string;
	}>;
}
