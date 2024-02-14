import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { IoSettingsOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-[#011710] py-2 w-full">
      {({ open }) => (
        <>
          <div className="w-full px-2 mx-auto sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                {/* <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button> */}
              </div>
              <div className="flex flex-col items-center justify-between flex-1 w-full md:flex-row">
                <div className="items-center flex-shrink-0 hidden sm:flex">
                    <div className='relative'>
                        <input type="text" placeholder='Search Token' className='bg-[#213630] rounded-md p-3 text-sm w-[300px]'></input>
                        <div className='absolute text-white transform -translate-y-1/2 right-1 cursor-pointer top-1/2 bg-[#30B778] p-2 rounded-md'><IoSearch className='w-5 h-5'/></div>
                    </div>
                </div>
                <div className='flex flex-row gap-3'>
                    <button className='bg-[#30B778] rounded-md py-3 px-5 text-white text-sm hover:text-[#30B778] hover:bg-white transition-all duration-500'>Connect Wallet</button>
                    <button className='bg-[#30B778] rounded-md p-3 text-white text-sm hover:text-[#30B778] hover:bg-white transition-all duration-500'><IoSettingsOutline className='w-5 h-5'/></button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
