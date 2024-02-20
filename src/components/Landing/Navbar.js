import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

import { ConnectButton } from "@rainbow-me/rainbowkit";
import '../../css/animations.css';

const navigation = [
  { name: 'Map Protocol', href: '#', current: true },
  { name: 'Governance', href: '#', current: false },
  { name: 'Docs', href: '#', current: false },
  { name: 'Security', href: '#', current: false },
  { name: 'FAQ', href: '#', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-[#011710] py-2">
      {({ open }) => (
        <>
          <div className="w-full px-2 mx-auto sm:px-6 lg:px-8 fadeInDown">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-between flex-1 w-full">
                <div className="flex items-center flex-shrink-0 ml-12 lg:ml-0">
                  <img src="../img/logo.svg" className='w-32 h-20 cursor-pointer'></img>
                </div>
                <div className="items-center hidden sm:ml-6 lg:flex">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-white' : 'text-gray-300 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium transition-all duration-500'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <Link to='/dashboard'><button className='bg-[#30B778] rounded-md py-3 px-5 text-white text-sm hover:text-[#30B778] hover:bg-white transition-all duration-500'>Launch App</button></Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-white bg-[#30B778]' : 'text-gray-300 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium transition-all duration-500'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
