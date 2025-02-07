import { prisma } from '../../config/prismaClient';

export class DisplayService {
  async getAllDisplay(user_id: string) {
    const displays = await prisma.display.findMany({
/*       where: {
        user_id: user_id,
      }, */
    });

    return {
      displays
    }
  }
}
