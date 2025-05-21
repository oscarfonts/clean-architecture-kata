import * as clarck from "@clack/prompts";
import type { User } from "../domain/entities/User.ts";
import { ViewInterface } from "./viewInterface.ts";

export class TerminalView extends ViewInterface {
	hello(): void {
		clarck.intro("Welcome to the terminal view!");
	}
	renderUsersList(users: Array<User>): void {
		clarck.log.message(JSON.stringify(users, null, 2));
	}
	async renderUserForm(): Promise<{
		email: string;
		username: string;
		password: string;
	}> {
		const username = (await clarck.text({ message: "Username:" })) as string;
		const email = (await clarck.text({ message: "Email:" })) as string;
		const password = (await clarck.text({ message: "Password:" })) as string;

		return { username, email, password };
	}
}
