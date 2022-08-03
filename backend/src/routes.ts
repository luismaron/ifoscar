import { Router } from 'express';
import multer from 'multer';

import { CreateStudentController } from './controllers/CreateStudentController';
import { CreateVideoclipController } from './controllers/CreateVideoclipController';
import ImportStudentsController from './controllers/ImportStudentsController';

const routes = Router();

const upload = multer({
  dest: 'tmp/',
});

const importStudentsController = new ImportStudentsController();
const createStudentController = new CreateStudentController();
const createVideoclipController = new CreateVideoclipController();

routes.post(
  '/students/upload',
  upload.single('file'),
  importStudentsController.handle
);

routes.post('/students/create', createStudentController.handle);

routes.post('/videoclips/create', createVideoclipController.handle);

export { routes };
