import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import StakeItem from './StakeItem';

export default function Main() {
    return (
      <div className="bg-[#011710] p-10 z-0 relative">
        <div className="flex flex-col">
            {/* First Sector */}
            <div className="grid w-full grid-cols-1 gap-10 text-white cursor-pointer sm:grid-cols-2">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center gap-2 text-xl font-medium sm:text-2xl">
                            <img src="./img/market-ethereum.svg" className="w-8 h-8"></img>
                            Ethereum
                            <MdOutlineKeyboardArrowDown className="w-5 h-5 text-[#30B778]"/>
                        </div>
                    </div>
                    <p className="max-w-3xl text-left">ANTHENA holders (Ethereum network only) can stake their assets in the Safety Module to add more security to the protocol and earn Safety Incentives. In the case of a shortfall event, your stake can be slashed to cover the deficit, providing an additional layer of protection for the protocol. </p>
                    <a className="text-left underline text-[#30B778]">Learn more about risks involved</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-[#223831] rounded-md p-4">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-[#30B778] text-3xl sm:text-4xl font-bold">$368.46M</p>
                        <p className="text-sm text-white">Funds in the Safety Module</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-[#30B778] text-3xl sm:text-4xl font-bold">820.00 ATHN</p>
                        <p className="text-sm text-white">Total emission per day</p>
                    </div>
                </div>
            </div>

            {/* Second Sector */}
            <div className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2">
                <StakeItem />
                <StakeItem />
                <StakeItem />
            </div>
        </div>
      </div>
    )
}
