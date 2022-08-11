import { Request, Response } from 'express';

import { UpdateVideoClipService } from '../services/UpdateVideoClipService';

class UpdateVideoClipController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, link, students } = request.body;

    const updateVideoClipService = new UpdateVideoClipService();

    await updateVideoClipService.execute({
      id,
      name,
      link,
      students,
    });

    return response.sendStatus(200);
  }
}

export { UpdateVideoClipController };
