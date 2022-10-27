import { Request, Response } from 'express';

import { ListStudentsPaginatedService } from '../services/ListStudentsPaginatedService';

class ListStudentsPaginatedController {
  async handle(request: Request, response: Response) {
    const { pageNumber, pageSize } = request.query;
    const listStudentsPaginatedService = new ListStudentsPaginatedService();
    console.log(pageNumber, pageSize);

    const students = await listStudentsPaginatedService.execute({
      pageNumber: Number(pageNumber),
      pageSize: Number(pageSize),
    });
    return response.json(students);
  }
}

export { ListStudentsPaginatedController };
