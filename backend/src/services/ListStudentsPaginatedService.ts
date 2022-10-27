import { prisma } from '../database';

export interface IListStudentDTO {
  pageNumber: number;
  pageSize: number;
}
class ListStudentsPaginatedService {
  async execute({ pageNumber = 0, pageSize }: IListStudentDTO) {
    const actors = await prisma.student.findMany({
      orderBy: {
        name: 'asc',
      },
      skip: pageSize * pageNumber,
      take: pageSize,
    });

    const studentCount = await prisma.student.count();
    return {
      actors,
      studentCount,
    };
  }
}

export { ListStudentsPaginatedService };
