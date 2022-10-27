import { Router } from 'express';
import multer from 'multer';

import { AuthenticateAdminController } from './controllers/AuthenticateAdminController';
import { CreateStudentController } from './controllers/CreateStudentController';
import { CreateVideoClipController } from './controllers/CreateVideoClipController';
import { GetTop3VotedController } from './controllers/GetTop3VotedController';
import ImportStudentsController from './controllers/ImportStudentsController';
import { ListActorsController } from './controllers/ListActorsController';
import { ListStudentsController } from './controllers/ListStudentsController';
import { ListStudentsPaginatedController } from './controllers/ListStudentsPaginatedController';
import { ListVideoClipsController } from './controllers/ListVideoClipsController';
import { ListVideoClipsPaginatedController } from './controllers/ListVideoClipsPaginatedController';
import { UpdateVideoClipController } from './controllers/UpdateVideoClipController';
import { VoteController } from './controllers/VoteController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

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
const authenticateAdminController = new AuthenticateAdminController();
const listStudentsController = new ListStudentsController();
const listStudentsPaginatedController = new ListStudentsPaginatedController();
const lListVideoClipsPaginatedController =
  new ListVideoClipsPaginatedController();

routes.post(
  '/students/upload',
  upload.single('file'),
  ensureAuthenticated,
  ensureAdmin,
  importStudentsController.handle
);

routes.post(
  '/students/create',
  ensureAuthenticated,
  ensureAdmin,
  createStudentController.handle
);

routes.post(
  '/videoclips/create',
  ensureAuthenticated,
  ensureAdmin,
  createVideoClipController.handle
);

routes.get('/videoclips', listVideoClipsController.handle);

routes.put(
  '/videoclips/:id',
  ensureAuthenticated,
  ensureAdmin,
  updateVideoClipController.handle
);

routes.post('/vote', voteController.handle);

routes.get('/actors', listActorsController.handle);

routes.get('/vote/top3', getTop3VotedController.handle);

routes.post('/admin/session', authenticateAdminController.handle);

routes.get(
  '/students/paginated',
  ensureAuthenticated,
  ensureAdmin,
  listStudentsPaginatedController.handle
);
routes.get(
  '/videoclips/paginated',
  ensureAuthenticated,
  ensureAdmin,
  lListVideoClipsPaginatedController.handle
);
routes.get(
  '/students/',
  ensureAuthenticated,
  ensureAdmin,
  listStudentsController.handle
);

export { routes };
