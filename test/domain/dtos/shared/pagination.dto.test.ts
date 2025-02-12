import { PaginationDto } from '../../../../src/domain/dtos/shared/pagination.dto';

describe('Test PaginationDto file', () => {
  test('should return a pagination Dto with default values', () => {
    const [error, paginationDto] = PaginationDto.create();
    expect(error).toBeUndefined();
    expect(paginationDto).toBeInstanceOf(PaginationDto);
    expect(paginationDto?.page).toBe(1);
    expect(paginationDto?.limit).toBe(10);
  });

  test('should return a paginationDto with custom values', () => {
    const [error, paginationDto] = PaginationDto.create(2, 5);
    expect(error).toBeUndefined();
    expect(paginationDto).toBeInstanceOf(PaginationDto);
    expect(paginationDto?.page).toBe(2);
    expect(paginationDto?.limit).toBe(5);
  });

  test('should return Page must be greater than 0 error', () => {
    const [error, paginationDto] = PaginationDto.create(0, 5);
    expect(error).toBe('Page must be greater than 0');
    expect(paginationDto).toBeUndefined();
  });
});
