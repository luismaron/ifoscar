import { Request, Response } from 'express';

import { ImportStudentsService } from '../services/ImportStudentsService';

class ImportStudentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const importStudentsService = new ImportStudentsService();

    await importStudentsService.execute(file as Express.Multer.File);

    return response.sendStatus(201);
  }
}

export default ImportStudentsController;
