import { Student } from '@prisma/client';

import { prisma } from '../database';

interface IStudentDTO {
  name: string;
  registration?: string;
  gender: 'Male' | 'Female';
}

class CreateStudentService {
  async execute({ name, registration, gender }: IStudentDTO): Promise<Student> {
    console.log(name, registration, gender);
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
