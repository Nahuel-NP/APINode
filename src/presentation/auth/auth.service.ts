import { LoginUserDto } from '../../domain/dtos/auth/login-user.dto';

export class AuthService {
  constructor() /* Inject */
  {}

  public async loginUser(loginUserDto: LoginUserDto) {
    return loginUserDto;
  }
}
