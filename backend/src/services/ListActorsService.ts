import { prisma } from '../database';

interface IListActors {
  gender?: 'Male' | 'Female';
}

class ListActorsService {
  async execute({ gender }: IListActors) {
    if (gender) {
      const actors = await prisma.student.findMany({
        where: {
          gender,
        },
        include: {
          videoclip: true,
        },
      });

      const actorsWhoAreInAVideoClip = actors.filter(
        (actor) => actor.videoclip_id !== null
      );

      return actorsWhoAreInAVideoClip;
    }

    const actors = await prisma.student.findMany({
      include: {
        videoclip: true,
      },
    });

    const actorsWhoAreInAVideoClip = actors.filter(
      (actor) => actor.videoclip_id !== null
    );

    return actorsWhoAreInAVideoClip;
  }
}

export { ListActorsService };
