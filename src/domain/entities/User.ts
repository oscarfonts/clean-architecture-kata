import {Email} from '../value-objects/Email.ts';
import {Password} from '../value-objects/Password.ts';

type UserProps = {
  id: string;
  username: string;
  email: Email;
  password: Password;
}

export class User {
  private readonly props: UserProps;

  private constructor(props: UserProps) {
    this.props = props;
  }

  static create({id, email, username, password}: {
    id: string,
    email: string,
    username: string,
    password: string
  }): User {
    return new User({
      id,
      username,
      email: Email.create(email),
      password: Password.create(password)
    });
  }

  equals(user: User) {
    if (user === undefined || user === null || !(user instanceof User)) {
      return false;
    }
    return this.props.id === user.props.id;
  }

  getEmail(): Email {
    return this.props.email;
  }
}
