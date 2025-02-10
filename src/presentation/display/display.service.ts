import { prisma } from '../../config/prismaClient';
import { CreateDisplayDto } from '../../domain/dtos/display/create-display.dto';
import { CustomError } from '../../domain/errors/custom.error';

export class DisplayService {
  async getAllDisplays(user_id: string) {
    const displays = await prisma.display.findMany({
      where: {
        user_id: user_id,
      },
    });

    return {
      displays,
    };
  }

  async getDisplayById(id: number, user_id: string) {
    const display = await prisma.display.findUnique({
      where: {
        id: id,
        user_id,
      },
    });

    return {
      display,
    };
  }

  async createDisplay(display: CreateDisplayDto, user_id: string) {
    try {
      const {
        description,
        name,
        price_per_day,
        resolution_height,
        resolution_width,
        type,
      } = display;
      const newDisplay = await prisma.display.create({
        data: {
          description,
          name,
          picture_url:'random picture_url',
          price_per_day,
          resolution_height,
          resolution_width,
          type,
          user_id,
        },
      });
      return { newDisplay };
    } catch (error) {
      console.log(error)
      throw CustomError.internalServer(`${error}`);
    }

  }

  async deleteDisplay(id: number, user_id: string) {
    const displayToDelete = await prisma.display.findUnique({
      where: {
        id: id,
        user_id,
      },
    });
    if (!displayToDelete) {
      throw new Error('Display not found');
    }

    const display = await prisma.display.delete({
      where: {
        id: id,
        user_id,
      },
    });

    return {
      display,
    };
  }
}
