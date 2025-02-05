import { bcryptAdapter } from '../../config/bcrypt.adapter';
import { prisma } from '../../config/prismaClient';
import { LoginUserDto } from '../../domain/dtos/auth/login-user.dto';
import { RegisterUserDto } from '../../domain/dtos/auth/register-user.dto';
import { UserEntity } from '../../domain/entities/user.entity';
import { CustomError } from '../../domain/errors/custom.error';

export class AuthService {
  constructor /* Inject */() {}

  public async loginUser(loginUserDto: LoginUserDto) {
    return loginUserDto;
  }

  public async registerUser(registerUserDto: RegisterUserDto) {
    const existUser = await prisma.user.findFirst({
      where: {
        email: registerUserDto.email,
      },
    });
    
    if (existUser) throw CustomError.badRequest('User already exists');
    try {

      const newUser = await prisma.user.create({
        data: {
          ...registerUserDto,
          password: bcryptAdapter.hash(registerUserDto.password),
        },
      });

      const { password: _, ...user } = UserEntity.fromObject(newUser);
      return {
        user,
      };
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }

  private sendValidationEmail = async () => {
    //TODO implement
  };
}
