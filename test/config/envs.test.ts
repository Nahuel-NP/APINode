import { envs } from '../../src/config/envs';

describe('Test envs file', () => {
  test('should return env values', () => {
    expect(envs).toEqual({
      PORT: 3001,
      DATABASE_URL: 'postgresql://postgres:123456@localhost:5432/Challenge',
      POSTGRES_USER: 'postgres',
      POSTGRES_DB: 'Challenge',
      POSTGRES_PORT: 5432,
      POSTGRES_PASSWORD: '123456',
      JWT_SEED: 'MyJs0nW3bTokenSeed',
    });
  });

  test('should return an error if not found env', async () => {
    process.env.PORT = 'ABC';
    vitest.resetModules();

    try {
      await import('../../src/config/envs');
      expect(1).toBe(2);
    } catch (error ) {
      expect(`${error}`).toBe('EnvVarError: env-var: "PORT" should be a valid integer');
    }
  });
});
