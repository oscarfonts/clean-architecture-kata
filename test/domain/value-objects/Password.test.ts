import test from 'node:test';
import assert from 'node:assert';
import {Password} from '../../../src/domain/value-objects/Password.ts';

test('Password', (t) => {
  t.test('guarda el valor', (t) => {
    const password = Password.create('Aa123456');
    assert.strictEqual(password.getValue(), 'Aa123456');
  });

  t.test('debe ser válido', (t) => {
    try {
      Password.create('invalid');
    } catch (e) {
      assert.equal(e.message, 'Invalid password');
    }
  });

  t.test('dos emails con el mismo valor deberían ser iguales', (t) => {
    const password1 = Password.create('Aa123456');
    const password2 = Password.create('Aa123456');
    assert.equal(password2.equals(password1), true);
  });
});
