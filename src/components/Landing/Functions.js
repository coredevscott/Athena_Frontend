import { IoCheckmarkOutline } from "react-icons/io5";
import '../../css/athena.css';

const features = [
  {
    name: 'Cross-chain asset mortgage and lending',
    description:
      'Users can mortgage assets on one chain and borrow different assets on another chain on the ATHENA platform to achieve cross-chain flow of assets.',
    icon: '../img/functions-icon1.svg',
  },
  {
    name: 'Automated asset management',
    description: 'Automatically manage users’ collateral and loans through smart contracts, including automated interest calculation and payment, and automatic liquidation of collateral.',
    icon: '../img/functions-icon2.svg',
  },
  {
    name: 'Cross-chain liquidity provision',
    description: 'Allow users to provide cross-chain assets to the liquidity pool to earn transaction fees and other incentives, increasing the liquidity of assets on each chain.',
    icon: '../img/functions-icon3.svg',
  },
]

export default function Functions() {
  return (
    <div className="py-8 overflow-hidden bg-[#021A13] sm:py-12 text-left relative">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col gap-10 mx-auto lg:flex-row gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0">
          <div className='flex items-center justify-center'>
            <img
              src="../img/functions-foreground.svg"
              alt="Tokenomics Model"
              className="relative w-full max-w-none sm:w-[30rem] p-6 md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
          <div className="w-full lg:pt-4">
            <div className="lg:max-w-2xl">
              <p className="mt-2 text-3xl font-medium tracking-tight text-white sm:text-4xl MichromaFont">Implemented Functions</p>
              <dl className="max-w-xl mt-16 space-y-4 text-base leading-7 text-[#DADBDF] lg:max-w-none">
                {features.map((feature) => (
                  <div className="flex flex-row items-center gap-5">
                    <img src={feature.icon} className="w-14 h-14"></img>
                    <div className="flex flex-col gap-5">
                      <div className="text-lg font-semibold">{feature.name}</div>
                      <div>{feature.description}</div>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
