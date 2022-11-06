import { Request, Response } from 'express';

import { ListStudentsService } from '../services/ListStudentsService';

class ListStudentsController {
  async handle(request: Request, response: Response) {
    const { pageNumber, pageSize } = request.query;
    const listActorsService = new ListStudentsService();

    const students = await listActorsService.execute();
    return response.json(students);
  }
}

export { ListStudentsController };
