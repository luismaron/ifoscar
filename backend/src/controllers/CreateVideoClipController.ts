import { Request, Response } from 'express';

import { CreateVideoClipService } from '../services/CreateVideoClipService';

class CreateVideoClipController {
  async handle(request: Request, response: Response) {
    const {
      name,
      link,
      actor_id,
      actress_id,
      supporting_actor_id,
      supporting_actress_id,
    } = request.body;

    const createVideoClipService = new CreateVideoClipService();

    await createVideoClipService.execute({
      name,
      link,
      actor_id,
      actress_id,
      supporting_actor_id,
      supporting_actress_id,
    });

    return response.sendStatus(201);
  }
}

export { CreateVideoClipController };
