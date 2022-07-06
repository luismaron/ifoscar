import { Request, Response } from 'express';

import { CreateStudentService } from '../services/CreateStudentService';

class CreateStudentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, registration } = request.body;

    const createStudentService = new CreateStudentService();

    await createStudentService.execute(name, registration);

    return response.sendStatus(201);
  }
}

export { CreateStudentController };
