import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// POST /api/post
// Required fields in body: title
// Optional fields in body: content

export default async function handle(req: any, res: any) {
    console.log('here');
    console.log(req.body);
    console.log('there')
  const { inputEmail, inputPassword } = req.body;

  const session = await getSession({ req });
  const result = await prisma.user.create({
    data: {
      email: inputEmail,
      password: inputPassword,
      
    },
  });
  res.json(result);
}