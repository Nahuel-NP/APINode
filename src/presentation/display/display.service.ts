import { prisma } from '../../config/prismaClient';

export class DisplayService {
  async getAllDisplays(user_id: string) {
    const displays = await prisma.display.findMany({
      where: {
        user_id: user_id,
      },
    });

    return {
      displays
    }
  }

  //TODO: userId
  async getDisplayById(id: number) {
    const display = await prisma.display.findUnique({
      where: {
        id: id,
      },
    });

    return {
      display
    }
  }
}
