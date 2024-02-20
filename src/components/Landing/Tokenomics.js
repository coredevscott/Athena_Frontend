import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { IoCheckmarkOutline } from "react-icons/io5";

const features = [
  {
    name: 'Reserve factor:',
    description:
      'percentage of protocol interest paid by borrowers',
    icon: IoCheckmarkOutline,
  },
  {
    name: 'Instant liquidity fees:',
    description: 'percentage of fees from instant liquidity transactions (V3 only).',
    icon: IoCheckmarkOutline,
  },
  {
    name: 'Liquidation fees:',
    description: 'percentage of collateral liquidation bonus (V3 only, not yet active)',
    icon: IoCheckmarkOutline,
  },
  {
    name: 'Portal fees:',
    description: 'paid by bridging protocols to re-back assets (V3 only, not yet active)',
    icon: IoCheckmarkOutline,
  },
]

export default function Tokenomics() {
  return (
    <div className="py-8 overflow-hidden bg-[#00130E] sm:py-12 text-left relative">
      <img src='./img/markets-gradient.png' className='absolute top-0 left-0'></img>
      <img src='./img/about-back.svg' className='absolute top-0 left-0 w-full'></img>
      <img src='./img/tokenomics-right-fore.svg' className='absolute right-0 bottom-1/4'></img>
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-[#5CDD98] underline">Tokenomics</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Athena Tokens</p>
              <p className="mt-6 text-lg leading-8 text-[#DADBDF]">
                The Map treasury is composed of the ecosystem reserve (MAP tokens) and treasury collectors which earn fees from:
              </p>
              <dl className="max-w-xl mt-10 space-y-4 text-base leading-7 text-[#DADBDF] lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-[#DADBDF]">
                      <feature.icon className="absolute w-5 h-5 text-[#DADBDF] left-1 top-1" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className='flex flex-row gap-10 max-w-[400px] justify-center p-3 border border-[#30B778] rounded-md mt-10'>
                  <div className='flex flex-col gap-2'>
                    <p className='text-[#30B778] text-2xl font-semibold'>$ 79,385,703</p>
                    <p className='text-[#30B778]'>Ecosystem Reserve</p>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <p className='text-[#30B778] text-2xl font-semibold'>$ 30,322,096</p>
                    <p className='text-[#30B778]'>Treasury Collectors</p>
                  </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <img
              src="../img/tokenomics-model.svg"
              alt="Tokenomics Model"
              className="relative w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem] p-6 md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
