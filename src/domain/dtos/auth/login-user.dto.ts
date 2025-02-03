import { regularExps } from "../../../config/regular-exp";

export class LoginUserDto {
  constructor(
    public email: string,
    public password: string,
  ) {}

  static create(object: { [key: string]: any }): [string?, LoginUserDto?] {

    const { email, password } = object

    if (!email) return ['Missing email', undefined]
    if (!password) return ['Missing password', undefined]
    if (!regularExps.email.test(email)) return ['Invalid email'];

    return [undefined, new LoginUserDto(email, password)]
  }
}
