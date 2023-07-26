import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  const { inputEmail, inputPassword } = req.body;


  const result = await prisma.user.create({
    data: {
      email: inputEmail,
      password: inputPassword,
      
    },
  });
  res.json(result);
}