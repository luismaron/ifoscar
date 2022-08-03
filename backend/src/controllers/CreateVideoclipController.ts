import { Request, Response } from 'express';

import { CreateVideoclipService } from '../services/CreateVideoclipService';

class CreateVideoclipController {
  async handle(request: Request, response: Response) {
    const { name, link, students } = request.body;

    const createVideoclipService = new CreateVideoclipService();

    await createVideoclipService.execute({ name, link, students });

    return response.sendStatus(201);
  }
}

export { CreateVideoclipController };
