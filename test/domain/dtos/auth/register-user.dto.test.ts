import { RegisterUserDto } from "../../../../src/domain/dtos/auth/register-user.dto"

describe('Test RegisterUserDto', () => { 

  const registerInfo = {
    email: 'prueba@google.com',
    password: '123456',
    name:'nahuel'
  }
  test('should return RegisterUserDto instance', () => { 
    
    const [error,registerDto] = RegisterUserDto.create(registerInfo)

    expect(registerDto).toBeInstanceOf(RegisterUserDto)
    expect(registerDto?.email).toBe(registerInfo.email)
    expect(registerDto?.password).toBe(registerInfo.password)
    expect(registerDto?.name).toBe(registerInfo.name)
    expect(error).toBeUndefined()
   })

   test('should return Missin email error ', () => { 
    
     const registerInfoWithoutEmail = {
       email: '',
       password: '123456',
       name:'nahuel'
     }
     const [error,registerDto] = RegisterUserDto.create(registerInfoWithoutEmail)

     expect(error).toBe('Missing email')
     expect(registerDto).toBeUndefined()
    })

    test('should return Invalid email error', () => { 
      const registerInfoWithoutEmail = {
        email: 'nahuel.n.pedroso',
        password: '123456',
        name:'nahuel'
      }
      const [error,registerDto] = RegisterUserDto.create(registerInfoWithoutEmail)
 
      expect(error).toBe('Invalid email')
      expect(registerDto).toBeUndefined()
     
     })
 })