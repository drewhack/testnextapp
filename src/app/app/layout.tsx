import BsHeader from '@/components/bs-header'
import { BsScripts } from '@/components/bsscripts'
import { Inter } from 'next/font/google'



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
  return (
    <html lang="en">


      <body className={inter.className}>

        <BsHeader />

        {children}
        
      </body>
    </html>
  )
}
