import e, { query } from 'express';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient(/* {
  log: ['query'],
} */);

/* prisma.$on('query', (e) => {
  console.log(e.query);
  console.log(e.params);
}); */

export { prisma };
