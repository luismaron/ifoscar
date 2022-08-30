import { Router } from 'express';
import multer from 'multer';

import { CreateStudentController } from './controllers/CreateStudentController';
import { CreateVideoClipController } from './controllers/CreateVideoClipController';
import { GetTop3VotedController } from './controllers/GetTop3VotedController';
import ImportStudentsController from './controllers/ImportStudentsController';
import { ListActorsController } from './controllers/ListActorsController';
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
const listActorsController = new ListActorsController();
const getTop3VotedController = new GetTop3VotedController();

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

routes.get('/actors', listActorsController.handle);

routes.get('/vote/top3', getTop3VotedController.handle);

export { routes };
