import { Request, Response } from 'express';

import { CreateVideoClipService } from '../services/CreateVideoClipService';

class CreateVideoClipController {
  async handle(request: Request, response: Response) {
    const { name, link, students } = request.body;

    const createVideoClipService = new CreateVideoClipService();

    await createVideoClipService.execute({ name, link, students });

    return response.sendStatus(201);
  }
}

export { CreateVideoClipController };
