import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { AppError } from '../core/domain/errors/AppError';
import { prisma } from '../database';

interface IAuthenticateAdminService {
  email: string;
  password: string;
}

class AuthenticateAdminService {
  async execute({ email, password }: IAuthenticateAdminService) {
    const admin = await prisma.admin.findFirst({
      where: {
        email,
      },
    });

    if (!admin) {
      throw new AppError('Email or password invalid.');
    }
    const passwordMatch = await compare(password, admin.password);

    if (!passwordMatch) {
      throw new AppError('Email or password invalid.');
    }

    try {
      const secretToken = process.env.JWT_SECRET as string;

      const token = sign({}, secretToken, {
        subject: admin.id,
        expiresIn: '1d',
      });

      return token;
    } catch (error) {
      throw new AppError('Unexpected error');
    }
  }
}

export { AuthenticateAdminService };
