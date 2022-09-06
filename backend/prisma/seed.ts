import { hash } from 'bcrypt';

import { prisma } from '../src/database';

async function main() {
  const password = 'admin';
  const passwordHash = await hash(password, 8);

  await prisma.admin.create({
    data: {
      email: 'admin@ifoscar.com.br',
      password: passwordHash,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
