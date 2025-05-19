import { ValueObject } from './ValueObject.ts';

const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

export class Email extends ValueObject<Email> {
  private readonly value: string;
  private constructor(value: string) {
    super();
    this.value = value;
  }

  static create(email: string): Email {
    if (!regex.test(email)) {
      throw new Error('Invalid email');
    }
    return new Email(email);
  }

  getValue(): string {
    return this.value;
  }
}
