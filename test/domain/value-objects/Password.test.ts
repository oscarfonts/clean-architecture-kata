import { describe, it } from "node:test";
import assert from "node:assert";
import { Password } from "../../../src/domain/value-objects/Password.ts";

describe("Password", () => {
	it("guarda el valor", () => {
		const password = Password.create("Aa123456");
		assert.strictEqual(password.getValue(), "Aa123456");
	});

	it("debe ser válido", () => {
		try {
			Password.create("invalid");
		} catch (e) {
			assert.equal(e.message, "Invalid password");
		}
	});

	it("dos emails con el mismo valor deberían ser iguales", () => {
		const password1 = Password.create("Aa123456");
		const password2 = Password.create("Aa123456");
		assert.equal(password2.equals(password1), true);
	});
});
