import { CustomError } from '../../src/domain/errors/custom.error';

describe('Test custom error file', () => {
  test('should create a custom error instance', () => {
    const error = {
      message: 'Not found',
      statusCode: 404,
    };

    const newError = new CustomError(error.statusCode, error.message);
    expect(newError).toBeInstanceOf(Error);
    expect(newError).toBeInstanceOf(CustomError);
  });

  test('should return passed values', () => {
    const error = {
      message: 'Not found',
      statusCode: 404,
    };

    const newError = new CustomError(error.statusCode, error.message);
    expect(newError.statusCode).toBe(error.statusCode);
    expect(newError.message).toBe(error.message);
  });

  test('should return correct status codes', () => { 
    
    const badRequestError = CustomError.badRequest('Bad request')
    expect(badRequestError.statusCode).toBe(400);
    expect(badRequestError.message).toBe('Bad request');

    const forbidenError = CustomError.forbiden('Forbidden')
    expect(forbidenError.statusCode).toBe(403);
    expect(forbidenError.message).toBe('Forbidden');

    const internalServerError = CustomError.internalServer('Internal server error')
    expect(internalServerError.statusCode).toBe(500);
    expect(internalServerError.message).toBe('Internal server error');
   })

});
