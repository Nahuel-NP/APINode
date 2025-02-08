import { prisma } from '../../config/prismaClient';

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
}
