import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server'


const prisma = new PrismaClient();

export async function POST(request: Request) {
console.log('1');
  const res = await request.json();
  console.log('2');  
  console.log(res);
  //const { inputEmail, inputPassword } = res.json;
  console.log('3');  
  //const inputEmail = formData.get('inputEmail') as string;
  //const inputPassword = formData.get('inputPassword') as string;
  


  const result = await prisma.user.create({
    data: {
      email: res.inputEmail,
      password: res.inputPassword,
      
    },
  });
  console.log('4');  
  console.log(Response);

  return NextResponse.json({ res })
  
}