import { NextFunction, Request, Response } from 'express';

import { AppError } from '../core/domain/errors/AppError';
import { prisma } from '../database';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.user;

  const admin = await prisma.admin.findFirst({
    where: {
      id,
    },
  });

  if (!admin) {
    throw new AppError('User is not admin.', 401);
  }

  next();
}
