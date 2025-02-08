import { DisplayEntity } from '../../../src/domain/entities/display.entity';

describe('Test Display Entity file', () => {
  const displayEntity = {
    id: 31,
    name: 'Display Entity',
    description: 'Display Entity Description',
    picture_url: 'picture_url',
    user_id: 'user_id',
    price_per_day: 'price_per_day',
    resolution_height: 'resolution_height',
    resolution_width: 'resolution_width',
    type: 'type',
  };

  test('should return display entity ', () => {
    const newDispay = DisplayEntity.fromObject(displayEntity);
    expect(newDispay).toBeInstanceOf(DisplayEntity);
    expect(newDispay.id).toEqual(displayEntity.id);
    expect(newDispay.name).toEqual(displayEntity.name);
    expect(newDispay.description).toEqual(displayEntity.description);
    expect(newDispay.picture_url).toEqual(displayEntity.picture_url);
    expect(newDispay.user_id).toEqual(displayEntity.user_id);
    expect(newDispay.price_per_day).toEqual(displayEntity.price_per_day);
    expect(newDispay.resolution_height).toEqual(
      displayEntity.resolution_height,
    );

    expect(newDispay.resolution_width).toEqual(displayEntity.resolution_width);
  });

  test('should throw error if not contain required property', () => {
    try {
      DisplayEntity.fromObject({
        ...displayEntity,
        id: undefined,
      });
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty('message', 'Id is required');
    }
  });
});
