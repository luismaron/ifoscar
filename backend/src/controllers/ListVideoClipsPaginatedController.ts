import { Request, Response } from 'express';

import { ListVideoClipsPaginatedService } from '../services/ListVideoClipsPaginatedService';

class ListVideoClipsPaginatedController {
  async handle(request: Request, response: Response) {
    const { year, pageSize, pageNumber } = request.query;

    const listVideoClipsPaginatedService = new ListVideoClipsPaginatedService();

    const videoClips = await listVideoClipsPaginatedService.execute({
      year: Number(year),
      pageNumber: Number(pageNumber),
      pageSize: Number(pageSize),
    });

    return response.json(videoClips);
  }
}

export { ListVideoClipsPaginatedController };
