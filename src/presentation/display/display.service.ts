import { prisma } from '../../config/prismaClient';
import { CreateDisplayDto } from '../../domain/dtos/display/create-display.dto';
import { PaginationDto } from '../../domain/dtos/shared/pagination.dto';
import { CustomError } from '../../domain/errors/custom.error';

export class DisplayService {
  async getAllDisplays(user_id: string,paginationDto:PaginationDto,displayType:string,name:string) {

    const displays = await prisma.display.findMany({
      where: {
        user_id: user_id,
        type: {
          contains: displayType,
        },
        name: {
          contains: name,
        },
      },
      skip: (paginationDto.page - 1) * paginationDto.limit,
      take: paginationDto.limit,
    });
    // page info
    const total_items = await prisma.display.count({
      where: {
        user_id: user_id,
      },
    });
    const total_pages = Math.ceil(total_items / paginationDto.limit);

    return {
      displays,
      meta: {
        total_items,
        current_page: paginationDto.page,
        total_pages,
      },
      
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

  async updateDisplay(id: number, user_id: string, display: CreateDisplayDto) {
    const displayToUpdate = await prisma.display.findUnique({
      where: {
        id: id,
        user_id,
      },
    });
    if (!displayToUpdate) {
      throw new Error('Display not found');
    }

    const updatedDisplay = await prisma.display.update({
      where: {
        id: id,
        user_id,
      },
      data: {
        ...display,
      },
    });

    return {
      updatedDisplay,
    };
  }
}
