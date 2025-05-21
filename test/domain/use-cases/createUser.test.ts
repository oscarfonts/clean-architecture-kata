import { describe, it } from "node:test";
import assert from "node:assert";
import { User } from "../../../src/domain/entities/User.ts";
import type { Email } from "../../../src/domain/value-objects/Email.ts";
import { createUser } from "../../../src/domain/use-cases/createUser.ts";
import type { UserRepository } from "../../../src/domain/repositories/UserRepository.ts";

const createFakeRepo = (users: Array<User>): UserRepository => {
	return {
		getUsers: (): Array<User> => users,
		createUser: (user: User): User => user,
		getUserByEmail: (email: Email): User | undefined => users[0],
	};
};

describe("createUser", () => {
	it("crea un usuario", () => {
		const fakeRepo = createFakeRepo([]);
		const sampleUser = User.create({
			id: "1",
			email: "user@example.com",
			username: "user",
			password: "Password123",
		});

		const result = createUser({ repository: fakeRepo })(sampleUser);

		assert.strictEqual(result.equals(sampleUser), true);
	});

	it("no puede crear un usuario con el mismo email que uno existente", () => {
		const sampleUser = User.create({
			id: "1",
			email: "user@example.com",
			username: "user",
			password: "Password123",
		});
		const fakeRepo = createFakeRepo([sampleUser]);

		try {
			createUser({ repository: fakeRepo })(sampleUser);
			assert(false, "should have thrown an error");
		} catch (e) {
			assert.equal(e.message, "An user with this email already exists");
		}
	});
});
