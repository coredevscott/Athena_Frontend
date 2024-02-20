import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { FiArrowLeftCircle, FiArrowRightCircle} from "react-icons/fi";

export default function About() {
  return (
    <div className="py-24 overflow-hidden text-left bg-[#011710] sm:py-32 relative">
        <img src='./img/markets-gradient.png' className='absolute top-0 left-0'></img>
        <div className="px-6 mx-auto max-w-7xl lg:px-10">
            <div className="relative grid max-w-2xl grid-cols-1 overflow-hidden mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 bg-[#273732] rounded-xl p-7">
                <img src='./img/about-back.svg' className='absolute top-0 left-0 w-full'></img>
                <div className="relative flex items-center justify-center">
                    <div className="lg:max-w-xl">
                        <h2 className="text-base font-semibold leading-7 text-[#5CDD98] underline">How to start?</h2>
                        <p className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Athena DeFi Lending</p>
                        <p className="mt-6 text-lg leading-8 text-[#DADBDF]">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Ut <br /><br />enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con ullamco lab
                        </p>
                        <button className='bg-[#30B778] text-white rounded-md py-3 px-10 mt-6'>Learn More</button>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <img src="./img/about-foreground.svg" className='relative'></img>
                </div>            
            </div>
        </div>
    </div>
  )
}
