import { Request, Response } from 'express';

import { GetTop3VotedService } from '../services/GetTop3VotedService';

class GetTop3VotedController {
  async handle(request: Request, response: Response) {
    const getTop3VotedService = new GetTop3VotedService();

    const data = await getTop3VotedService.execute();

    return response.json(data);
  }
}

export { GetTop3VotedController };
