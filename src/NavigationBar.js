/* This example requires Tailwind CSS v3.0+ */
import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import supabase from './auth.js';
import { useNavigate } from "react-router-dom";

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  React.useEffect(() => {
    supabase.auth.getUser().then((user) => {
      //console.log(user.data.user)

      if(user.data.user){
        navigate("/dashboard")
      }
    });
  }, []);

  return (
    <div className="bg-white">
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 px-4" src="https://bpeqsefkefhjnfshvrck.supabase.co/storage/v1/object/public/calls/calljoy.png" alt="" />
              </a>
            </div>
            <div className="flex lg:hidden  ">
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
                <a key={item.name} href={item.href} className="font-semibold text-gray-900 ">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <a
                href="/login"
                className="inline-block rounded-lg px-5 py-2 text-lg bg-white text-black border-black border-2"
              >
                Login
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
                  <div className="py-6">
                    <a
                      href="/login"
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
                <div className="mt-4 text-5xl font-extrabold text-center justify-center sm:text-7xl border-black">
                  <h1>
                    <span className="text-indigo-700">New</span> customers
                  </h1>
                  <h1>
                    found weekly
                  </h1>
                </div>
                <div className="mt-4 text-xl text-black text-center font-semibold">
                  <p>
                    We crawl the web with our AI to find you customers.
                    We deliver them right to your phone so you can reach out to them.
                  </p>
                </div>
                <div className="mt-6 flex gap-x-4 sm:justify-center justify-center   ">
                  <a
                    href="/login"
                    className="inline-block rounded-lg border-black border-2 py-3 px-5 text-xl font-semibold"
                  >
                    Try for free{' '}
                    <span className="text-black" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>

              <div className="mt-8">
              </div>

              <div>
                <div className="absolute relative sm:justify-center justify-center px-8 py-10 mt-2">
                  <div className=" px-2  ">
                    <img className="object-contain" src="https://bpeqsefkefhjnfshvrck.supabase.co/storage/v1/object/public/calls/iPhone%2013%20Pro%20Max%20-%203(1).png"/>
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