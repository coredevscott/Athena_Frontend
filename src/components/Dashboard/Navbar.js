import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { BsInfoCircle } from "react-icons/bs";
import { useState } from 'react';

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
  const [showModal, setShowModal] = useState(0);

  return (
    <Disclosure as="nav" className="bg-[#011710] py-2 w-full">
      {({ open }) => (
        <>
          <div className="w-full px-2 mx-auto sm:px-6 lg:px-8">
          {showModal == 1 ? (<div className='fixed fadeIn left-0 top-0 w-full h-full z-[10000] bg-transparent backdrop-filter backdrop-blur-md'>
                <div className='relative flex flex-col items-center justify-center w-full h-full text-white'>
                    <div className='relative w-full mx-8 sm:w-[540px] bg-[#21372F] border border-[#7E7D7D] p-10 rounded-xl flex items-start flex-col justify-center'>
                        <XMarkIcon onClick={() => setShowModal(0)} className='absolute w-6 h-6 cursor-pointer top-3 right-3'/>
                        <p className='text-2xl text-left'>Switch Tokens</p>
                        <div className='text-[#A69F9F] flex flex-row items-center gap-2 mt-3'><BsInfoCircle className='w-4 h-4 text-[#30B778]'/>Please switch to Arbitrum</div>
                        <p className='mt-5 text-sm text-white'>You send exactly</p>
                        <div className='relative w-full'>
                          <input type="text" className='mt-2 rounded-md border border-[#009045] bg-[#3C4F48] w-full p-3 text-white outline-none' placeholder='25,040'></input>
                          <div className='absolute flex flex-row items-center gap-2 text-xl transform -translate-y-1/3 top-1/2 right-3'>
                            <img src="../img/market-eth.svg" className='w-6 h-6'></img>ETH
                          </div>
                        </div>
                        <div className='rounded-full z-10 bg-[#009045] p-2 w-20 h-20 ml-48 mt-[-10px] relative flex items-center justify-center'><HiOutlineSwitchVertical className='w-12 h-12'/></div>
                        <p className='mt-[-40px] z-0 text-sm text-white'>Recipient gets</p>
                        <div className='relative w-full'>
                          <input type="text" className='mt-2 rounded-md border border-[#009045] bg-[#3C4F48] w-full p-3 text-white outline-none' placeholder='14,14633.84'></input>
                          <div className='absolute flex flex-row items-center gap-2 text-xl transform -translate-y-1/3 top-1/2 right-3'>
                            <img src="../img/market-polygon.png" className='w-6 h-6'></img>MATIC
                          </div>
                        </div>
                        <div className='grid text-sm mt-7 grid-cols-4 text-[#9C9A9A]'>
                          <p>1ETH = 17,890 ATHN</p>
                          <p>MATIC = 1780 ATHN</p>
                          <p>1ETH = 17,890 ATHN</p>
                          <p>MATIC = 1780 ATHN</p>
                        </div>
                        <button className='rounded-md py-4 mt-7 font-medium w-full bg-[#5CDD98] text-white'>Switch Now</button>
                    </div>        
                </div>
            </div>) : null}
            
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
              <div className="flex flex-col items-center justify-between flex-1 w-full sm:flex-row">
                <div className="items-center flex-shrink-0 hidden sm:flex">
                    <div className='relative'>
                        <input type="text" placeholder='Search Token' className='bg-[#213630] rounded-md p-3 text-sm w-[300px]'></input>
                        <div className='absolute text-white transform -translate-y-1/2 right-1 cursor-pointer top-1/2 bg-[#30B778] p-2 rounded-md'><IoSearch className='w-5 h-5'/></div>
                    </div>
                </div>
                <div className='flex flex-row gap-3'>
                    <button className='bg-[#30B778] rounded-md py-3 px-5 text-white text-sm hover:text-[#30B778] hover:bg-white transition-all duration-500'>Connect Wallet</button>
                    <button className='bg-[#30B778] rounded-md p-3 text-white text-sm hover:text-[#30B778] hover:bg-white transition-all duration-500' onClick={() => setShowModal(1)}><HiOutlineSwitchHorizontal className='w-5 h-5'/></button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
