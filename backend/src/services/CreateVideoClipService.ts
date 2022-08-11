import { AppError } from '../core/domain/errors/AppError';
import { prisma } from '../database';

interface IVideoClipDTO {
  name: string;
  link: string;
  students: {
    id: string;
  }[];
}

class CreateVideoClipService {
  async execute({ name, link, students }: IVideoClipDTO) {
    if (!name || !link || students.length === 0) {
      throw new AppError(
        'Name and link are required and at least one student in the clip'
      );
    }

    const ids = students.map((student) => {
      return {
        id: student.id,
      };
    });

    await prisma.videoClip.create({
      data: {
        name,
        link,
        students: {
          connect: ids,
        },
      },
    });
  }
}

export { CreateVideoClipService };
