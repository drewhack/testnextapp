'use client'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/tw-sidebar'
import {useState} from 'react'
import type { NextPage } from 'next'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TESTING',
  description: 'Generated by create next app',
  name: 'viewport',
}

export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
}) {
  const colors = ['light', 'dark', 'blue', 'highcontrast'];
  const [color, setColor] = useState<string>(colors[1])
  return (

        <html className="h-full bg-white">
          <body className="h-full">
          <div className={[
            
            color && `theme-${color}`,
            ]
            .filter(Boolean)
            .join(' ')}>
              {children}
          </div> 
          </body>
       </html>
  )
}
