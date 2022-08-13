import { AppError } from '../core/domain/errors/AppError';
import { prisma } from '../database';

interface IUpdateVideoClipService {
  id: string;
  name: string;
  link: string;
  students: {
    id: string;
  }[];
}

class UpdateVideoClipService {
  async execute({ id, name, link, students }: IUpdateVideoClipService) {
    const videoClip = await prisma.videoClip.findUnique({
      where: {
        id,
      },
    });

    if (!videoClip) {
      throw new AppError('VideoClip does not exists', 404);
    }

    const ids = students.map((student) => {
      return {
        id: student.id,
      };
    });

    await prisma.videoClip.update({
      where: {
        id,
      },
      data: {
        name,
        link,
        students: {
          set: ids,
        },
      },
    });
  }
}

export { UpdateVideoClipService };
