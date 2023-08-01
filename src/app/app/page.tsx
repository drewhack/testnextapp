import { BootstrapRow } from '@/components/bootstraptest';
import Image from 'next/image';
import { SignOutButton } from '@/components/nextauthtest'
import ThemeSwitcher from '@/components/bs-themeswitcher'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <ThemeSwitcher />
      <SignOutButton />
    </main>
  )
}
