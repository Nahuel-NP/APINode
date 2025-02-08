import { bcryptAdapter } from '../../src/config/bcrypt.adapter';

describe('Test bycriptAdapter file', () => {
  const passwordForTest = '123456';
  test('should hash a password', () => {
    const hashed = bcryptAdapter.hash(passwordForTest);

    expect(typeof hashed).toBe('string');
  });
  test('should compare password successfully', () => {
    const hashed = bcryptAdapter.hash(passwordForTest);
    const isMatch = bcryptAdapter.compare(passwordForTest, hashed);
    expect(isMatch).toBe(true);
  });

  test('should not match hashed password', () => {
    const hashed = bcryptAdapter.hash(passwordForTest);
    const isMatch = bcryptAdapter.compare(passwordForTest + 'a', hashed);
    expect(isMatch).toBe(false);
  });
});
