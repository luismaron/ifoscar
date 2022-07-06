import { Student } from '@prisma/client';

import { prisma } from '../database';

class CreateStudentService {
  async execute(name: string, registration: string): Promise<Student> {
    const student = await prisma.student.create({
      data: {
        name,
        registration,
      },
    });

    return student;
  }
}

export { CreateStudentService };
