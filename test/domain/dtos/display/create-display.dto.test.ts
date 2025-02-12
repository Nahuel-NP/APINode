import { CreateDisplayDto } from '../../../../src/domain/dtos/display/create-display.dto';

describe('Test create-display.dto file', () => {
  const displayToCreate: CreateDisplayDto = {
    name: 'new display',
    description: 'new description',
    price_per_day: '100',
    resolution_height: '200',
    resolution_width: '300',
    type: 'outdoor',
  };

  test('should return CreateDisplayDto object', () => {
    const [error, displayDto] = CreateDisplayDto.create(displayToCreate);
    expect(error).toBeUndefined();
    expect(displayDto).toBeInstanceOf(CreateDisplayDto);
  });

  test('should return Missing name error', () => {
    const [error, displayDto] = CreateDisplayDto.create({
      ...displayToCreate,
      name: '',
    });
    expect(error).toBeDefined();
    expect(displayDto).toBeUndefined();
    expect(error).toBe('Missing name');
  });

  test('should rewturn Missing type error', () => {
    const [error, displayDto] = CreateDisplayDto.create({
      ...displayToCreate,
      type: '',
    });
    expect(error).toBeDefined();
    expect(displayDto).toBeUndefined();
    expect(error).toBe('Missing type');
  });
});
