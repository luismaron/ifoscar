import { AppError } from '../core/domain/errors/AppError';
import { prisma } from '../database';

interface IVoteDTO {
  student_registration: string;
  best_actor_id: string;
  best_actress_id: string;
  best_supporting_actor_id: string;
  best_supporting_actress_id: string;
  best_videoclip_id: string;
  best_videoclip_costume_id: string;
  best_videoclip_edition_id: string;
}

class VoteService {
  async execute({
    student_registration,
    best_actor_id,
    best_actress_id,
    best_supporting_actor_id,
    best_supporting_actress_id,
    best_videoclip_costume_id,
    best_videoclip_edition_id,
    best_videoclip_id,
  }: IVoteDTO) {
    const student = await prisma.student.findFirst({
      where: {
        registration: student_registration,
      },
    });

    if (!student) {
      throw new AppError('Matrícula inválida.', 404);
    }

    const studentHasAlreadyVoted = await prisma.vote.findFirst({
      where: {
        student_id: student.id,
      },
    });

    if (studentHasAlreadyVoted) {
      throw new AppError('É permitido apenas um voto por estudante.');
    }

    const best_actor = await prisma.student.findUnique({
      where: {
        id: best_actor_id,
      },
    });

    if (!best_actor) {
      throw new AppError(
        'Estudante a ser votado como Melhor Ator não foi encontrado.'
      );
    }

    if (best_actor.gender !== 'Male') {
      throw new AppError(
        'Estudante a ser votado como Melhor Ator precisa ser do sexo Masculino.'
      );
    }

    const best_actress = await prisma.student.findUnique({
      where: {
        id: best_actress_id,
      },
    });

    if (!best_actress) {
      throw new AppError(
        'Estudante a ser votada como Melhor Atriz não foi encontrada.'
      );
    }

    if (best_actress.gender !== 'Female') {
      throw new AppError(
        'Estudante a ser votada como Melhor Atriz precisa ser do sexo Feminino'
      );
    }

    const best_supporting_actor = await prisma.student.findUnique({
      where: {
        id: best_supporting_actor_id,
      },
    });

    if (!best_supporting_actor) {
      throw new AppError(
        'Estudante a ser votado como Melhor Ator coadjuvante não foi encontrado.'
      );
    }

    if (best_supporting_actor.gender !== 'Male') {
      throw new AppError(
        'Estudante a ser votado como Melhor Ator coadjuvante precisa ser do sexo Masculino.'
      );
    }

    const best_supporting_actress = await prisma.student.findUnique({
      where: {
        id: best_supporting_actress_id,
      },
    });

    if (!best_supporting_actress) {
      throw new AppError(
        'Estudante a ser votada como Melhor Atriz coadjuvante não foi encontrada.'
      );
    }

    if (best_supporting_actress.gender !== 'Female') {
      throw new AppError(
        'Estudante a ser votada como Melhor Atriz coadjuvante precisa ser do sexo Feminino.'
      );
    }

    const best_videoclip = await prisma.videoClip.findUnique({
      where: {
        id: best_videoclip_id,
      },
    });

    if (!best_videoclip) {
      throw new AppError(
        'Video clipe a ser votado como Melhor Video Clipe não foi encontrado.'
      );
    }

    const best_videoclip_costume = await prisma.videoClip.findUnique({
      where: {
        id: best_videoclip_costume_id,
      },
    });

    if (!best_videoclip_costume) {
      throw new AppError(
        'Video clipe a ser votado como Melhor Figurino não foi encontrado.'
      );
    }

    const best_videoclip_edition = await prisma.videoClip.findUnique({
      where: {
        id: best_videoclip_edition_id,
      },
    });

    if (!best_videoclip_edition) {
      throw new AppError(
        'Video clipe a ser votado como Melhor Edição não foi encontrado.'
      );
    }

    await prisma.vote.createMany({
      data: [
        {
          student_id: student.id,
          category: 'ACTOR',
          student_voted_id: best_actor_id,
        },
        {
          student_id: student.id,
          category: 'ACTRESS',
          student_voted_id: best_actress_id,
        },
        {
          student_id: student.id,
          category: 'SUPPORTING_ACTOR',
          student_voted_id: best_supporting_actor_id,
        },
        {
          student_id: student.id,
          category: 'SUPPORTING_ACTRESS',
          student_voted_id: best_supporting_actress_id,
        },
        {
          student_id: student.id,
          category: 'VIDEO_CLIP',
          videoclip_voted_id: best_videoclip_id,
        },
        {
          student_id: student.id,
          category: 'COSTUME',
          videoclip_voted_id: best_videoclip_costume_id,
        },
        {
          student_id: student.id,
          category: 'EDITION',
          videoclip_voted_id: best_videoclip_edition_id,
        },
      ],
    });
  }
}

export { VoteService };
