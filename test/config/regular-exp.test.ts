import { regularExps } from '../../src/config/regular-exp';

describe('Test regular-exp file', () => {
  const emailPass = 'pedroso.nahuel.dev@gmail.com';
  const emailFail = 'pedroso.nahuel.dev.gmail';
  test('should match regex', () => {
    const regex = regularExps.email;
    expect(regex.test(emailPass)).toBeTruthy();
  });
  test('should not match regex', () => {
    const regex = regularExps.email;
    expect(regex.test(emailFail)).toBeFalsy();
  });
});
