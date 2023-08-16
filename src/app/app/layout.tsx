'use client'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/tw-sidebar'
import { useState } from 'react'
import type { NextPage } from 'next'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const colors = ['light', 'dark', 'blue', 'highcontrast'];
  const [color, setColor] = useState<string>(colors[1]);

  const getThemeColor = (selectedColor: string) => {
    switch (selectedColor) {
      case 'light':
        return 'bg-white';
      case 'dark':
        return 'bg-black';
      case 'blue':
        return 'bg-blue-500';
      case 'highcontrast':
        return 'bg-gray-800';
      default:
        return 'bg-white'; // default theme
    }
  };

  return (
    <html className="h-full">
      <body className="h-full">
        <div className={[
          'flex h-screen flex-col justify-center',
          getThemeColor(color)
        ]
          .filter(Boolean)
          .join(' ')}>
          <Sidebar color={color} setColor={setColor} />
          {children}
        </div>
      </body>
    </html>
  )
}
