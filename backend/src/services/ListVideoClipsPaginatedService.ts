import { prisma } from '../database';

interface IListVideoClipsPaginatedService {
  year?: number;
  pageNumber: number;
  pageSize: number;
}

class ListVideoClipsPaginatedService {
  async execute({
    year,
    pageNumber,
    pageSize,
  }: IListVideoClipsPaginatedService) {
    const yearFormatted = year || Number(new Date().getFullYear());

    const videoClips = await prisma.videoClip.findMany({
      orderBy: {
        name: 'asc',
      },
      skip: pageSize * pageNumber,
      take: pageSize,
      where: {
        created_at: {
          lte: new Date(`${yearFormatted}-12-31`),
          gte: new Date(`${yearFormatted}-01-01`),
        },
      },
      include: {
        actor: true,
        actress: true,
        supporting_actor: true,
        supporting_actress: true,
      },
    });

    const videoClipCount = await prisma.videoClip.count();
    return {
      videoClips,
      videoClipCount,
    };
  }
}

export { ListVideoClipsPaginatedService };
