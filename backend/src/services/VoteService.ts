import { Category } from '@prisma/client';

import { AppError } from '../core/domain/errors/AppError';
import { prisma } from '../database';

interface IVoteDTO {
  category: Category;
  student_registration: string;
  student_voted_id?: string;
  videoclip_voted_id?: string;
}

class VoteService {
  async execute({
    category,
    student_registration,
    student_voted_id,
    videoclip_voted_id,
  }: IVoteDTO) {
    const student = await prisma.student.findFirst({
      where: {
        registration: student_registration,
      },
    });

    if (!student) {
      throw new AppError('Student not found.', 404);
    }

    const studentHasAlreadyVotedInThisCategory = await prisma.vote.findFirst({
      where: {
        category,
        student_id: student.id,
      },
    });

    if (studentHasAlreadyVotedInThisCategory) {
      throw new AppError('Students can vote just once by category.');
    }

    if (
      category === 'ACTOR' ||
      category === 'ACTRESS' ||
      category === 'SUPPORTING_ACTOR' ||
      category === 'SUPPORTING_ACTRESS'
    ) {
      const studentVoted = await prisma.student.findFirst({
        where: {
          id: student_voted_id,
        },
      });

      if (!studentVoted) {
        throw new AppError('Student to be voted not found.');
      }

      if (!studentVoted.videoclip_id) {
        throw new AppError(
          'The student to be voted must be participating in a video clip.'
        );
      }

      if (
        (category === 'ACTOR' || category === 'SUPPORTING_ACTOR') &&
        studentVoted.gender !== 'Male'
      ) {
        throw new AppError(
          'The student to be voted in the category "Best actor or Best supporting actor" needs to be a Male.'
        );
      }

      if (
        (category === 'ACTRESS' || category === 'SUPPORTING_ACTRESS') &&
        studentVoted.gender !== 'Female'
      ) {
        throw new AppError(
          'The student to be voted in the category "Best actress or Best supporting actress" needs to be a Female.'
        );
      }

      await prisma.vote.create({
        data: {
          student_id: student.id,
          category,
          student_voted_id,
        },
      });
    } else {
      const videoclip = await prisma.videoClip.findFirst({
        where: {
          id: videoclip_voted_id,
        },
      });

      if (!videoclip) {
        throw new AppError('Video clip to be voted not found.');
      }

      await prisma.vote.create({
        data: {
          student_id: student.id,
          category,
          videoclip_voted_id,
        },
      });
    }
  }
}

export { VoteService };
