import { bcryptAdapter } from '../../config/bcrypt.adapter';
import { envs } from '../../config/envs';
import { JwtAdapter } from '../../config/jwt.adapter';
import { prisma } from '../../config/prismaClient';
import { LoginUserDto } from '../../domain/dtos/auth/login-user.dto';
import { RegisterUserDto } from '../../domain/dtos/auth/register-user.dto';
import { UserEntity } from '../../domain/entities/user.entity';
import { CustomError } from '../../domain/errors/custom.error';

export class AuthService {
  constructor /* Inject */() {}

  public async loginUser(loginUserDto: LoginUserDto) {
    const existUser = await prisma.user.findFirst({
      where: {
        email: loginUserDto.email,
      },
    });

    if (!existUser) throw CustomError.badRequest('User not found');

    const isMatch = bcryptAdapter.compare(
      loginUserDto.password,
      existUser.password,
    );

    if (!isMatch) throw CustomError.badRequest('Invalid credentials');
    const token = await JwtAdapter.generateToken({ id: existUser.id });
    const user = UserEntity.fromObject(existUser);
    return {
      user,
      token,
    };
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

      const user = UserEntity.fromObject(newUser);

      const token = await JwtAdapter.generateToken({ id: user.id });
      return {
        user,
        token,
      };
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer(`${error}`);
    }
  }

  private sendValidationEmail = async (email: string) => {
    const token = await JwtAdapter.generateToken({ email });
    const link = `${envs.FRONTEND_URL}/auth/validate-email?token=${token}`;
    const html = `
    <h1>Validate your email</hl>
    <p>Click on the following link to validate your email</p>
    <a href="${link}">Validate your email: ${email}</a>
    `;

    const options = {
      to: email,
      subject: 'Validate your email',
      htmlBody: html,
    };
    console.log(options);

    /*     const isSent = await this.emailService.sendEmail(options);

    if (!isSent) throw CustomError.internalServer('Error while sending email');
 */
    return true;
  };

  public validateEmail = async (token: string) => {
    const payload = await JwtAdapter.validateToken(token);
    if (!payload) throw CustomError.badRequest('Invalid token');

    const { email } = payload as { email: string };
    if (!email) throw CustomError.internalServer('Email not in token');

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) throw CustomError.badRequest('User not found');

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        email_validated: true,
      },
    });

    return true;

  };
}
