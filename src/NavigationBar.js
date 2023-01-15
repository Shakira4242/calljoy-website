/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white pattern-wavy pattern-indigo-600 pattern-bg-transparent pattern-opacity-100 pattern-size-8">
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 absolute" src="https://bpeqsefkefhjnfshvrck.supabase.co/storage/v1/object/public/calls/calljoy.png" alt="" />
              </a>
            </div>
            <div className="flex lg:hidden transition hover:scale-105">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <div className="h-full" aria-hidden="true">
                  <svg className="w-6 h-6 fill-black scale-150">
                    <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                  </svg>
                </div>
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-semibold text-gray-900 hover:scale-105">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <a
                href="/login"
                className="inline-block rounded-lg px-7 py-2 text-sm font-semibold leading-6 bg-indigo-600 shadow-sm ring-1 border-black border-2 border-r-4 border-b-4 ring-black text-white hover:scale-110 duration-1000"
              >
                Log in
              </a>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
      <main>
        <div className="relative px-6 lg:px-0">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-30 sm:pb-40">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              </div>
              <div>
                <h1 className="text-5xl font-extrabold text-center justify-center sm:text-7xl border-black border-1 transition hover:scale-105 duration-1000">
                  Find <span className="text-indigo-700">missed</span> customers
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-600 text-center font-semibold transition hover:scale-105 duration-1000">
                  We help you find and text your customers like never before.
                </p>
                <div className="mt-6 flex gap-x-4 sm:justify-center justify-center transition hover:scale-110 duration-1000">
                  <a
                    href="/login"
                    className="inline-block border-black border-2 border-r-4 border-b-4 shadow-solid-primary rounded-xl bg-indigo-600 px-5 py-3 text-2xl font-semibold leading-7 text-white ring-3 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                  >
                    Try for free{' '}
                    <span className="text-indigo-200" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>

              <div className="mt-8">
              </div>

              <div>
                <div className="absolute relative sm:justify-center justify-center px-8 py-10 mt-2">
                  <div className="transition px-2 hover:scale-105 duration-1000">
                    <img className="object-contain" src="https://bpeqsefkefhjnfshvrck.supabase.co/storage/v1/object/public/calls/iPhone%2013%20Pro%20Max%20-%202(7).png"/>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}