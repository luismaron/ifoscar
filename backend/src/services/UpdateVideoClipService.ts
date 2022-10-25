import { AppError } from '../core/domain/errors/AppError';
import { prisma } from '../database';

interface IUpdateVideoClipService {
  id: string;
  name: string;
  link: string;
  actor_id: string;
  actress_id: string;
  supporting_actor_id: string;
  supporting_actress_id: string;
}

class UpdateVideoClipService {
  async execute({
    id,
    name,
    link,
    actor_id,
    actress_id,
    supporting_actor_id,
    supporting_actress_id,
  }: IUpdateVideoClipService) {
    const videoClip = await prisma.videoClip.findUnique({
      where: {
        id,
      },
    });

    if (!videoClip) {
      throw new AppError('VideoClip does not exists', 404);
    }

    if (
      !name ||
      !link ||
      !actor_id ||
      !actress_id ||
      !supporting_actress_id ||
      supporting_actor_id
    ) {
      throw new AppError(
        'Name and link are required and actors student in the clip'
      );
    }

    const actor = await prisma.student.findFirst({ where: { id: actor_id } });
    if (!actor) throw new AppError('Invalid actor');
    const actress = await prisma.student.findFirst({
      where: { id: actress_id },
    });
    if (!actress) throw new AppError('Invalid actress');

    const supporting_actress = await prisma.student.findFirst({
      where: { id: supporting_actress_id },
    });
    if (!supporting_actress) throw new AppError('Invalid supporting actress');

    const supporting_actor = await prisma.student.findFirst({
      where: { id: supporting_actor_id },
    });
    if (!supporting_actor) throw new AppError('Invalid supporting actor');

    await prisma.videoClip.update({
      where: {
        id,
      },
      data: {
        name,
        link,
        actor_id,
        actress_id,
        supporting_actor_id,
        supporting_actress_id,
      },
    });
  }
}

export { UpdateVideoClipService };
