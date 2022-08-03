import { prisma } from '../database';

interface IVideoclipDTO {
  name: string;
  link: string;
  students: {
    id: string;
  }[];
}

class CreateVideoclipService {
  async execute({ name, link, students }: IVideoclipDTO) {
    if (!name || !link || students.length === 0) {
      throw new Error();
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

export { CreateVideoclipService };
