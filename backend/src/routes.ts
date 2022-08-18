import { Router } from 'express';
import multer from 'multer';

import { CreateStudentController } from './controllers/CreateStudentController';
import { CreateVideoClipController } from './controllers/CreateVideoClipController';
import ImportStudentsController from './controllers/ImportStudentsController';
import { ListVideoClipsController } from './controllers/ListVideoClipsController';
import { UpdateVideoClipController } from './controllers/UpdateVideoClipController';
import { VoteController } from './controllers/VoteController';

const routes = Router();

const upload = multer({
  dest: 'tmp/',
});

const importStudentsController = new ImportStudentsController();
const createStudentController = new CreateStudentController();
const createVideoClipController = new CreateVideoClipController();
const listVideoClipsController = new ListVideoClipsController();
const updateVideoClipController = new UpdateVideoClipController();
const voteController = new VoteController();

routes.post(
  '/students/upload',
  upload.single('file'),
  importStudentsController.handle
);

routes.post('/students/create', createStudentController.handle);

routes.post('/videoclips/create', createVideoClipController.handle);

routes.get('/videoclips', listVideoClipsController.handle);

routes.put('/videoclips/:id', updateVideoClipController.handle);

routes.post('/vote', voteController.handle);

export { routes };
