import { Request, Response } from 'express';

import { VoteService } from '../services/VoteService';

class VoteController {
  async handle(request: Request, response: Response) {
    const {
      student_registration,
      category,
      student_voted_id,
      videoclip_voted_id,
    } = request.body;

    const voteService = new VoteService();

    await voteService.execute({
      category,
      student_registration,
      student_voted_id: student_voted_id || null,
      videoclip_voted_id: videoclip_voted_id || null,
    });

    return response.sendStatus(201);
  }
}

export { VoteController };
