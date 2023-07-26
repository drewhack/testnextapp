import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server'


const prisma = new PrismaClient();

export default async function POST(request: Request, response: Response) {
  const formData  = await request.formData();
  const inputEmail = formData.get('inputEmail')
  const inputPassword = formData.get('inputPassword')
  


  const result = await prisma.user.create({
    data: {
      email: inputEmail,
      password: inputPassword,
      
    },
  });
  console.log(Response);
  return NextResponse.json({ inputEmail, inputPassword })
  
}