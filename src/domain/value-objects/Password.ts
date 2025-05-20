import {ValueObject} from './ValueObject.ts';

const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export class Password extends ValueObject<Password> {
  private readonly value: string;

  private constructor(value: string) {
    super();
    this.value = value;
  }

  static create(email: string): Password {
    if (!regex.test(email)) {
      throw new Error('Invalid password');
    }
    return new Password(email);
  }

  getValue(): string {
    return this.value;
  }
}
