import { Request, Response } from 'express';

import { VoteService } from '../services/VoteService';

class VoteController {
  async handle(request: Request, response: Response) {
    const {
      student_registration,
      best_actor_id,
      best_actress_id,
      best_supporting_actor_id,
      best_supporting_actress_id,
      best_videoclip_costume_id,
      best_videoclip_edition_id,
      best_videoclip_id,
    } = request.body;

    const voteService = new VoteService();

    await voteService.execute({
      student_registration,
      best_actor_id,
      best_actress_id,
      best_supporting_actor_id,
      best_supporting_actress_id,
      best_videoclip_costume_id,
      best_videoclip_edition_id,
      best_videoclip_id,
    });

    return response.sendStatus(201);
  }
}

export { VoteController };
