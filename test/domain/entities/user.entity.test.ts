import { UserEntity } from '../../../src/domain/entities/user.entity';

describe('Test user entity', () => {
  const user = {
    id: 'any_id',
    name: 'any_name',
    email: 'any_email',
    password: 'any_password',
  };

  test('should create a user entity instance', () => {
    const newUser = UserEntity.fromObject(user);
    expect(newUser).toBeInstanceOf(UserEntity);
    expect(newUser.email).toBe(user.email);
    expect(newUser.name).toBe(user.name);
  });
});
