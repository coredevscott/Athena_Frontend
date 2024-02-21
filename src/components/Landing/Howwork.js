import { BsArrowUpRightCircle } from "react-icons/bs";
import '../../css/athena.css';

const data = [
    {imgUrl: "./img/market-eth.svg", network: "Ethereum"},
    {imgUrl: "./img/market-base.svg", network: "Base"},
    {imgUrl: "./img/market-polygon.png", network: "Polygon"},
    {imgUrl: "./img/market-arbitrum.png", network: "Arbitrum"},
];

export default function Howwork() {
  return (
    <div className="py-8 overflow-hidden text-left bg-[#0E221C] sm:py-8 relative">
        <img src='./img/markets-gradient.png' className='absolute top-0 left-0'></img>
        <img src="./img/howwork-foreground.png" className='absolute top-0 left-0'></img>
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="relative flex justify-end w-full max-w-2xl mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
            <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-2xl">
                <h2 className="text-base font-semibold leading-7 text-[#5CDD98] underline">How to start?</h2>
                <p className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl MichromaFont">How it works?</p>
                <div className='flex flex-col gap-5 mt-6'>
                    <div className='flex flex-col gap-3 sm:flex-row items-center justify-between border rounded-md p-4 border-[#5CDD98] bg-[#2D423B]'>
                        <div className='text-[#5CDD98] text-4xl sm:text-5xl font-semibold'>01</div>
                        <div className='flex flex-col max-w-md gap-3'>
                            <p className='font-semibold text-white'>Borrower Application</p>
                            <p className='text-[#E3EAE6]'>The lending process begins with a borrower submitting a loan application on the fullchain lending platform.</p>
                        </div>
                        <BsArrowUpRightCircle className='w-10 h-10 text-[#5CDD98]'/>
                    </div>

                    <div className='group flex flex-col gap-3 sm:flex-row items-center justify-between rounded-md hover:border-[#5CDD98] transition-all duration-300 border p-4 border-[#2C3F39] bg-[#2C3F39]'>
                        <div className='text-[#0E221C] text-4xl sm:text-5xl font-semibold transition-all duration-300 group-hover:text-[#5CDD98]'>02</div>
                        <div className='flex flex-col max-w-md gap-3'>
                            <p className='font-semibold text-white'>Lender Matching and Smart Contract Creation</p>
                            <p className='group-hover:text-[#E3EAE6] text-[#717B76]'>Once the borrower's application is submitted, the fullchain lending platform matches them with potential lenders based on their desired loan criteria.</p>
                        </div>
                        <BsArrowUpRightCircle className='w-10 h-10 text-[#3A4844] transition-all duration-300 group-hover:text-[#5CDD98]'/>
                    </div>

                    <div className='group flex flex-col gap-3 sm:flex-row items-center justify-between rounded-md hover:border-[#5CDD98] transition-all duration-300 border p-4 border-[#2C3F39] bg-[#2C3F39]'>
                        <div className='text-[#0E221C] text-4xl sm:text-5xl font-semibold transition-all duration-300 group-hover:text-[#5CDD98]'>03</div>
                        <div className='flex flex-col max-w-md gap-3'>
                            <p className='font-semibold text-white'>Funding and Loan Execution</p>
                            <p className='group-hover:text-[#E3EAE6] text-[#717B76]'>After the loan agreement is established, lenders have the option to fund the loan by transferring the agreed-upon amount to the smart contract.</p>
                        </div>
                        <BsArrowUpRightCircle className='w-10 h-10 text-[#3A4844] transition-all duration-300 group-hover:text-[#5CDD98]'/>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
