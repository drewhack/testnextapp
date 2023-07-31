import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server'


const prisma = new PrismaClient();

export async function POST(request: Request) {

  const res = await request.json();

  const result = await prisma.user.create({
    data: {
      email: res.inputEmail,
      password: res.inputPassword,
      
    },
  });

  return NextResponse.json({ res })
  
}