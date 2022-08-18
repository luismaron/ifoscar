import { Student } from '@prisma/client';

import { prisma } from '../database';

class CreateStudentService {
  async execute(
    name: string,
    registration: string,
    gender: 'Male' | 'Female'
  ): Promise<Student> {
    const student = await prisma.student.create({
      data: {
        name,
        registration,
        gender,
      },
    });

    return student;
  }
}

export { CreateStudentService };
