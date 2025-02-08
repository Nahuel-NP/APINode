export class DisplayEntity {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly description: string,
    public picture_url: string,
    public readonly user_id: string,
    public readonly price_per_day: string,
    public readonly resolution_height: string,
    public readonly resolution_width: string,
    public readonly type: string,
  ) {}

  static fromObject(object: { [key: string]: any }): DisplayEntity {
    const { id, name, description, picture_url, user_id, price_per_day, resolution_height, resolution_width, type } = object;

    if (!id) throw new Error('Id is required');
    if (!name) throw new Error('Name is required');
    if (!description) throw new Error('Description is required');
    if (!picture_url) throw new Error('Picture is required');
    if (!user_id) throw new Error('User id is required');
    if (!price_per_day) throw new Error('Price per day is required');
    if (!resolution_height) throw new Error('Resolution height is required');
    if (!resolution_width) throw new Error('Resolution width is required');
    if (!type) throw new Error('Type is required');

    return new DisplayEntity(id, name, description, picture_url, user_id, price_per_day, resolution_height, resolution_width, type);
  }
}
