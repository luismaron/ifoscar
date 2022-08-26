import 'express-async-errors';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';

import { AppError } from './core/domain/errors/AppError';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3334, () =>
  console.log('🚀 Server is running at http://localhost:3334')
);
