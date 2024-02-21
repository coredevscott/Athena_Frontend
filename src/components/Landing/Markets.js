import { FiArrowLeftCircle, FiArrowRightCircle} from "react-icons/fi";
import '../../css/athena.css';

const data = [
    {imgUrl: "./img/market-eth.svg", network: "Ethereum", description: "Have gained significant traction, harnessing the power of smart contracts to enable seamless and decentralized lending activities, empowering borrowers and lenders with transparency and efficiency."},
    {imgUrl: "./img/market-base.svg", network: "Base", description: "Providing a vibrant alternative for borrowers and lenders to engage in lending activities, leveraging the speed and cost-effectiveness of BSC transactions."},
    {imgUrl: "./img/market-polygon.png", network: "Polygon", description: "Emerged as a pivotal component of the DeFi landscape, offering users the ability to participate in lending with reduced fees and faster transaction confirmations, enhancing accessibility and scalability."},
    {imgUrl: "./img/market-arbitrum.png", network: "Arbitrum", description: "Poised to unlock even greater potential, enabling users to benefit from faster transaction processing and lower costs, while maintaining compatibility with the Ethereum ecosystem."},
];

export default function Markets() {
  return (
    <div className="py-24 overflow-hidden text-left bg-[#011710] sm:py-32 relative">
        <img src='./img/markets-left-foreground.png' className="absolute left-0 top-1/3"></img>
        <img src='./img/markets-gradient.png' className='absolute top-0 left-0'></img>
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex items-center justify-center lg:pr-8 lg:pt-4">
                <div className="lg:max-w-xl">
                    <h2 className="text-base font-semibold leading-7 text-[#5CDD98] underline">Markets</h2>
                    <p className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl MichromaFont">Athena Markets</p>
                    <p className="mt-6 text-lg leading-8 text-[#DADBDF]">
                        With its decentralized nature and smart contract capabilities, fullchain lending platforms offer efficiency, trust, and new opportunities for individuals and businesses to participate in lending activities.
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
                        <div className='text-[#DADBDF]'>{item.description}</div>
                    </div>
                    ))
                }            
            </div>
        </div>
        </div>
    </div>
  )
}
