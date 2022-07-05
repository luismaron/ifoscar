import { Router } from 'express';
import multer from 'multer';

import ImportStudentsController from './controllers/ImportStudentsController';

const routes = Router();

const upload = multer({
  dest: 'tmp/',
});

const importStudentsController = new ImportStudentsController();

routes.post(
  '/students/upload',
  upload.single('file'),
  importStudentsController.handle
);

export { routes };
