import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../core/domain/errors/AppError';

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing.', 401);
  }

  const [, token] = authHeader.split(' ');

  console.log(token);

  const secretToken = process.env.JWT_SECRET as string;
  try {
    const { sub: user_id } = verify(token, secretToken);

    request.user = {
      id: user_id,
    };

    next();
  } catch (error) {
    console.log(error.message);
    throw new AppError('Token invalid.', 401);
  }
}
