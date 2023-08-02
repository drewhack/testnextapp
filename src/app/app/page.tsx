import { BootstrapRow } from '@/components/bootstraptest';
import Image from 'next/image';
import { SignOutButton } from '@/components/nextauthtest'
import ThemeSwitcher from '@/components/bs-themeswitcher'

export default function Home() {
  return (
    <main className="tw-flex tw-min-h-screen tw-flex-col tw-items-center tw-justify-between tw-p-24">
      <BootstrapRow />
      <ThemeSwitcher />
      <SignOutButton />
    </main>
  )
}
