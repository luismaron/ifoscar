import { Request, Response } from 'express';

import { ListActorsService } from '../services/ListActorsService';

interface IListActors {
  gender?: 'Male' | 'Female';
}

class ListActorsController {
  async handle(request: Request, response: Response) {
    const { gender } = request.query as IListActors;

    const listActorsService = new ListActorsService();

    if (!gender) {
      await listActorsService.execute({});
    }

    const actors = await listActorsService.execute({ gender });
    return response.json(actors);
  }
}

export { ListActorsController };
