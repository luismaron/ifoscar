import { Request, Response } from 'express';

import { ListVideoClipsService } from '../services/ListVideoClipsService';

class ListVideoClipsController {
  async handle(request: Request, response: Response) {
    const { year } = request.query;

    const listVideoClipsService = new ListVideoClipsService();

    const videoClips = await listVideoClipsService.execute({
      year: Number(year),
    });

    return response.json(videoClips);
  }
}

export { ListVideoClipsController };
