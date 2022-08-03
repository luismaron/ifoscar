import e, { query } from 'express';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export { prisma };
