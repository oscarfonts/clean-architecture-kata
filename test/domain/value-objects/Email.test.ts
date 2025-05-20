import test from 'node:test';
import assert from 'node:assert';
import {Email} from '../../../src/domain/value-objects/Email.ts';


test('Email', (t) => {
  t.test('guarda el valor', (t) => {
    const email = Email.create('user@example.com');
    assert.strictEqual(email.getValue(), 'user@example.com');
  });

  t.test('debe ser válido', (t) => {
    try {
      Email.create('invalid');
    } catch (e) {
      assert.equal(e.message, 'Invalid email');
    }
  });

  t.test('dos emails con el mismo valor deberían ser iguales', (t) => {
    const email1 = Email.create('user@example.com');
    const email2 = Email.create('user@example.com');
    assert.equal(email1.equals(email2), true);
  });
});
