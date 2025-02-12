import { LoginUserDto } from '../../../../src/domain/dtos/auth/login-user.dto';

describe('Test LoginUserDto', () => { 

  const loginInfo = {
    email: 'prueba@google.com',
    password: '123456'
  }
  test('should return LoginUserDto instance', () => { 
    
    const [error,loginDto] = LoginUserDto.create(loginInfo)

    expect(loginDto).toBeInstanceOf(LoginUserDto)
    expect(loginDto?.email).toBe(loginInfo.email)
    expect(loginDto?.password).toBe(loginInfo.password)
    expect(error).toBeUndefined()
   })

   test('should return Missin email error ', () => { 
    
     const loginInfoWithoutEmail = {
       email: '',
       password: '123456'
     }
     const [error,loginDto] = LoginUserDto.create(loginInfoWithoutEmail)

     expect(error).toBe('Missing email')
     expect(loginDto).toBeUndefined()
    })

    test('should return Invalid email error', () => { 
      const loginInfoWithoutEmail = {
        email: 'nahuel.n.pedroso',
        password: '123456'
      }
      const [error,loginDto] = LoginUserDto.create(loginInfoWithoutEmail)
 
      expect(error).toBe('Invalid email')
      expect(loginDto).toBeUndefined()
     
     })
 })