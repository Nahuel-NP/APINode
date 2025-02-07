export class CreateDisplayDto {
  private constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly price_per_day: string,
    public readonly resolution_height: string,
    public readonly resolution_width: string,
    public readonly type: string,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateDisplayDto?] {
    const {
      name,
      description,
      price_per_day,
      resolution_height,
      resolution_width,
      type,
    } = props;

    if (!name) return ['Missing name'];
    if (!description) return ['Missing description'];
    if (!price_per_day) return ['Missing price per day'];

    if (!resolution_height) return ['Missing resolution height'];

    if (!resolution_width) return ['Missing resolution width'];

    if (!type) return ['Missing type'];
    return [
      undefined,
      new CreateDisplayDto(
        name,
        description,
        price_per_day,
        resolution_height,
        resolution_width,
        type,
      ),
    ];
  }
}
