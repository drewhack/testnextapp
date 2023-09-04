'use client'
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition, Disclosure, RadioGroup } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  ChevronRightIcon,
  RectangleGroupIcon,
  SwatchIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { signOut } from "next-auth/react"
import { Counter } from '@/features/counter/counter'
import { ThemeSelector } from '@/features/themes/themes'
import { useAppSelector, useAppDispatch } from '@/app/app/hooks'
import { setTheme } from '@/features/themes/themeSlice'





const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  {
    name: 'Teams',
    current: false,
    icon: UsersIcon,
    children: [
      { name: 'Engineering', icon: HomeIcon, href: '#', current: false },
      { name: 'Human Resources', icon: HomeIcon, href: '#', current: false },
      { name: 'Customer Success', icon: HomeIcon, href: '#', current: false },
    ],
  },

  
  {
    name: 'Projects',
    current: false,
    icon: RectangleGroupIcon,
    children: [
      { name: 'GraphQL API', icon: HomeIcon, href: '#', current: false },
      { name: 'iOS App', icon: HomeIcon, href: '#', current: false },
      { name: 'Android App', icon: HomeIcon, href: '#', current: false },
      { name: 'New Customer Portal', icon: HomeIcon, href: '#', current: false },
    ],
  },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
const userNavigation = [
  { name: 'Your profile', onClick: () => {}, href: '#' },
  { name: 'Sign out', onClick: signOut, href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
  //const theme = useAppSelector((state) => state.theme.value)  
  const theme = "dark"
  const dispatch = useAppDispatch()  
  const [sidebarOpen, setSidebarOpen] = useState(false)
  /*
    These below are in place until i've figured out contexts
  */
  const themes = ['light', 'dark', 'blue', 'highcontrast'];
  

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-nav-bg-color">
        <body class="h-full">
        ```
      */}
      <div className={[
            
            theme && `theme-${theme}`,
            ]
            .filter(Boolean)
            .join(' ')}>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-icon-color" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-nav-bg-border bg-nav-bg-color px-6">
                    
      <div className="flex h-16 shrink-0 items-center">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <a
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-nav-bg-highlight' : 'hover:bg-nav-bg-highlight',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-nav-text-color'
                      )}
                    >
                      <item.icon className="h-6 w-6 shrink-0 text-nav-icon-color" aria-hidden="true" />
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current ? 'bg-nav-bg-highlight' : 'hover:bg-nav-bg-highlight',
                              'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-nav-text-color'
                            )}
                          >
                            <item.icon className="h-6 w-6 shrink-0 text-nav-icon-color" aria-hidden="true" />
                            {item.name}
                            <ChevronRightIcon
                              className={classNames(
                                open ? 'rotate-90 text-gray-500' : 'text-nav-icon-color',
                                'ml-auto h-5 w-5 shrink-0'
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel as="ul" className="mt-1 px-2">
                            {item.children.map((subItem) => (
                              <li key={subItem.name}>
                                {/* 44px */}
                                <Disclosure.Button
                                  as="a"
                                  href={subItem.href}
                                  className={classNames(
                                    subItem.current ? 'bg-nav-bg-highlight' : 'hover:bg-nav-bg-highlight',
                                    'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-nav-text-color'
                                  )}
                                >
                                  {subItem.name}
                                </Disclosure.Button>
                              </li>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>

        </ul>
      </nav>
    </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-nav-bg-border bg-nav-bg-color px-6">
      <div className="flex h-16 shrink-0 items-center">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <a
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-nav-bg-highlight' : 'hover:bg-nav-bg-highlight',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-nav-text-color'
                      )}
                    >
                      <item.icon className="h-6 w-6 shrink-0 text-nav-icon-color" aria-hidden="true" />
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current ? 'bg-nav-bg-highlight' : 'hover:bg-nav-bg-highlight',
                              'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-nav-text-color'
                            )}
                          >
                            <item.icon className="h-6 w-6 shrink-0 text-nav-icon-color" aria-hidden="true" />
                            {item.name}
                            <ChevronRightIcon
                              className={classNames(
                                open ? 'rotate-90 text-gray-500' : 'text-nav-icon-color',
                                'ml-auto h-5 w-5 shrink-0'
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel as="ul" className="mt-1 px-2">
                            {item.children.map((subItem) => (
                              <li key={subItem.name}>
                                {/* 44px */}
                                <Disclosure.Button
                                  as="a"
                                  href={subItem.href}
                                  className={classNames(
                                    subItem.current ? 'bg-nav-bg-highlight' : 'hover:bg-nav-bg-highlight',
                                    'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-nav-text-color'
                                  )}
                                >
                                  {subItem.name}
                                </Disclosure.Button>
                              </li>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>

        </ul>
      </nav>
    </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-nav-bg-border bg-nav-bg-color px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 text-nav-text-color lg:hidden" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-nav-icon-color"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-full w-full border-0 py-0 pl-8 pr-0 bg-nav-bg-color text-nav-prof-text placeholder:text-nav-icon-color focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-nav-icon-color hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>


                <Menu as="div" className="relative">
                  <Menu.Button className="-m-2.5 p-2.5 text-nav-icon-color hover:text-gray-5005">
                    <span className="sr-only">Open Theme Menu</span>
                    <span className="hidden lg:flex lg:items-center">
                      <SwatchIcon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-nav-bg-color py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    <RadioGroup value={theme} onChange={setTheme}>
                        <RadioGroup.Label className="mt-5 block">
                          Select a color:
                        </RadioGroup.Label>
                        <div className="">
                          {themes.map((c) => {
                            return (
                              <div>
                              <RadioGroup.Option
                                className=""
                                value={c}
                                key={c}
                                onClick={() => dispatch(setTheme(c))}
                              >
                                {c}
                              </RadioGroup.Option>
                              </div>
                            );
                          })}
                        </div>
                      </RadioGroup>
                    </Menu.Items>
                  </Transition>
                </Menu>



                {/* Separator */}
                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-nav-bg-highlight"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span className="ml-4 text-sm font-semibold leading-6 text-nav-prof-text" aria-hidden="true">
                        Tom Cook
                      </span>
                      <ChevronDownIcon className="ml-2 h-5 w-5 text-nav-icon-color" aria-hidden="true" />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-nav-bg-color py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-nav-bg-highlight' : '',
                                'block px-3 py-1 text-sm leading-6 text-nav-prof-text'
                              )}
                              onClick={() =>item.onClick()}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
                          {/*CHILDREN GO HERE */ }
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">< Counter />< ThemeSelector />{/* Your content */}</div>
          </main>
        </div>
      </div>
    </>
  )
}