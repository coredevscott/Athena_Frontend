import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { FiArrowLeftCircle, FiArrowRightCircle} from "react-icons/fi";

const data = [
    {imgUrl: "./img/market-eth.svg", network: "Ethereum"},
    {imgUrl: "./img/market-base.svg", network: "Base"},
    {imgUrl: "./img/market-polygon.png", network: "Polygon"},
    {imgUrl: "./img/market-arbitrum.png", network: "Arbitrum"},
];

export default function Markets() {
  return (
    <div className="py-24 overflow-hidden text-left bg-[#011710] sm:py-32 relative">
        <img src='./img/markets-left-foreground.png' className="absolute left-0 top-1/3"></img>
        <img src='./img/markets-gradient.png' className='absolute top-0 left-0'></img>
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-xl">
                <h2 className="text-base font-semibold leading-7 text-[#5CDD98] underline">Markets</h2>
                <p className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Athena Markets</p>
                <p className="mt-6 text-lg leading-8 text-[#DADBDF]">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con ullamco lab
                </p>
                <div className='flex flex-row gap-5 mt-8'>
                    <FiArrowLeftCircle className='text-[#5CDD98] w-10 h-10 cursor-pointer' />
                    <FiArrowRightCircle className='text-[#5CDD98] w-10 h-10 cursor-pointer' />
                </div>
            </div>
            </div>
            <div className='z-10 grid grid-cols-1 gap-5 sm:grid-cols-2'>
                {
                    data.map((item) => (
                        <div className='bg-[#20342E] border-l-4 rounded-md border-[#5CDD98] p-3 flex flex-col gap-3'>
                        <div className='flex flex-row gap-5'>
                            <img src={item.imgUrl} className='w-10 h-10'></img>
                            <div className='flex flex-col gap-2'>
                                <p className='text-xl font-semibold text-white'>{item.network}</p>
                                <p className='text-[#5CDD98]'>$479.50M</p>
                            </div>
                        </div>
                        <div className='text-[#DADBDF]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo c</div>
                    </div>
                    ))
                }            
            </div>
        </div>
        </div>
    </div>
  )
}
