import { Request, Response } from 'express';

import { ListStudentsService } from '../services/ListStudentsService';

class ListStudentsController {
  async handle(request: Request, response: Response) {
    const { pageNumber, pageSize } = request.query;
    const listActorsService = new ListStudentsService();
    console.log(pageNumber, pageSize);

    const students = await listActorsService.execute();
    return response.json(students);
  }
}

export { ListStudentsController };
