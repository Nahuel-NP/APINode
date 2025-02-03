import { regularExps } from "../../../config/regular-exp";

export class RegisterUserDto {
  private constructor(
    private readonly name: string,
    private readonly email: string,
    private readonly password: string,
  ) {}

  static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
    const { name, email, password } = object;

    if (!name) return ['Missing name', undefined];
    if (!email) return ['Missing email', undefined];
    if (!password) return ['Missing password', undefined];
    if (!regularExps.email.test(email)) return ['Invalid email'];

    return [undefined, new RegisterUserDto(name, email, password)];
  }
}
