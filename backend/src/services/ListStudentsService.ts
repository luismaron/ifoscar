import { prisma } from '../database';
import { IListStudentDTO } from './ListStudentsPaginatedService';

class ListStudentsService {
  async execute() {
    const students = await prisma.student.findMany({
      orderBy: {
        name: 'asc',
      },
    });
    return students;
  }
}

export { ListStudentsService };
