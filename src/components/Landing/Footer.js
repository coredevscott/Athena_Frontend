import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { FaTelegram, FaDiscord, FaTwitter, FaLinkedin, FaLink } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="relative py-8 overflow-hidden bg-[#021A13] isolate sm:py-24 lg:py-12">
        <img src="./img/footer-foreground.svg" className='absolute bottom-0 left-0 z-0 w-full'></img>
        <div className="relative z-10 px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto text-left gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {/* Left Logo */}
            <div className="max-w-xl lg:max-w-lg">
                <img src="./img/logo.svg" className='w-40 h-20'></img>
                <h2 className="mt-6 text-xl font-bold tracking-tight text-white sm:text-2xl">Subscribe to our newsletter.</h2>
                <div className="flex max-w-md mt-6 gap-x-4">
                    <label htmlFor="email-address" className="sr-only">
                    Email address
                    </label>
                    <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                    />
                    <button
                    type="submit"
                    className="bg-[#30B778] rounded-md py-3 px-5 text-white text-sm hover:text-[#30B778] hover:bg-white transition-all duration-500"
                    >
                    Subscribe
                    </button>
                </div>
                <p className='mt-10 text-white'>© 2024 Map -All right reserved</p>
            </div>

            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3 lg:pt-2">
                <div className="flex flex-col items-start justify-start">
                    <dt className="mt-4 font-semibold text-[#5CDD98] text-xl">Quick links</dt>
                    <div className='flex flex-col gap-3 mt-6 text-white'>
                        <div className='cursor-pointer hover:text-[#5CDD98] transi'>Home</div>
                        <div className='cursor-pointer hover:text-[#5CDD98] transi'>Protocol</div>
                        <div className='cursor-pointer hover:text-[#5CDD98] transi'>Markets</div>
                        <div className='cursor-pointer hover:text-[#5CDD98] transi'>Security</div>
                        <div className='cursor-pointer hover:text-[#5CDD98] transi'>Partners</div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                    <dt className="mt-4 font-semibold text-[#5CDD98] text-xl">News</dt>
                    <div className='flex flex-col gap-3 mt-6 text-white'>
                        <div className='cursor-pointer hover:text-[#5CDD98] transi'>Blog</div>
                        <div className='cursor-pointer hover:text-[#5CDD98] transi'>FAQ</div>
                        <div className='cursor-pointer hover:text-[#5CDD98] transi'>Press Kit</div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                    <dt className="mt-4 font-semibold text-[#5CDD98] text-xl">Others</dt>
                    <div className='flex flex-col gap-3 mt-6 text-white'>
                        <div className='cursor-pointer hover:text-[#5CDD98] transi'>How it works?</div>
                        <div className='cursor-pointer hover:text-[#5CDD98] transi'>Why Athena?</div>
                        <div className='cursor-pointer hover:text-[#5CDD98] transi'>Benefit of Athena</div>
                    </div>
                    <div className='flex flex-row justify-start gap-5 mt-10'>
                        <FaTelegram className='w-7 h-7 text-white cursor-pointer hover:text-[#5CDD98]'/>
                        <FaDiscord className='w-7 h-7 text-white cursor-pointer hover:text-[#5CDD98]'/>
                        <FaTwitter className='w-7 h-7 text-white cursor-pointer hover:text-[#5CDD98]'/>
                        <FaLinkedin className='w-7 h-7 text-white cursor-pointer hover:text-[#5CDD98]'/>
                    </div>
                </div>
            </dl>
        </div>
        </div>
    </div>
  )
}
