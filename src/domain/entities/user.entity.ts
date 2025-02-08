export class UserEntity {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    // public readonly password: string,
  ) {}

  static fromObject(object: { [key: string]: any }): UserEntity {
    const { id, name, email } = object;

    if (!id) throw new Error('Id is required');
    if (!name) throw new Error('Name is required');
    if (!email) throw new Error('Email is required');
    // if (!password) throw new Error('Password is required');

    return new UserEntity(id, name, email);
  }
}
