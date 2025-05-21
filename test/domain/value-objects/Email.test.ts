import { describe, it } from "node:test";
import assert from "node:assert";
import { Email } from "../../../src/domain/value-objects/Email.ts";

describe("Email", () => {
	it("guarda el valor", () => {
		const email = Email.create("user@example.com");
		assert.strictEqual(email.getValue(), "user@example.com");
	});

	it("debe ser válido", () => {
		try {
			Email.create("invalid");
		} catch (e) {
			assert.equal(e.message, "Invalid email");
		}
	});

	it("dos emails con el mismo valor deberían ser iguales", () => {
		const email1 = Email.create("user@example.com");
		const email2 = Email.create("user@example.com");
		assert.equal(email1.equals(email2), true);
	});
});
