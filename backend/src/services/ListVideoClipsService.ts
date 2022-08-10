import { prisma } from '../database';

interface IListVideoClipsService {
  year?: number;
}

class ListVideoClipsService {
  async execute({ year }: IListVideoClipsService) {
    const yearFormatted = year || Number(new Date().getFullYear());

    const videoClips = await prisma.videoClip.findMany({
      where: {
        created_at: {
          lte: new Date(`${yearFormatted}-12-31`),
          gte: new Date(`${yearFormatted}-01-01`),
        },
      },
    });

    return videoClips;
  }
}

export { ListVideoClipsService };
