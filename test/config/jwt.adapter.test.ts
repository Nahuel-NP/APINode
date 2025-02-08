import { JwtAdapter } from '../../src/config/jwt.adapter';

describe('test JwtAdapter', () => {
  const payloadForTest = { id: '123', name: 'test' };

  test('should generate token', async () => {
    const token = await JwtAdapter.generateToken(payloadForTest);
    expect(typeof token).toBe('string');
  });

  test('should validate token', async () => {
    const token = await JwtAdapter.generateToken(payloadForTest);
    const tokenDecoded: { id: string; name: string } | null =
      await JwtAdapter.validateToken(token as string);
    expect(payloadForTest).toEqual(
      expect.objectContaining({
        id: tokenDecoded?.id,
        name: tokenDecoded?.name,
      }),
    );
  });
});
