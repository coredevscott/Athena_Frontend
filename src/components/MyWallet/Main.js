import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import LineLiveChart from './LineLiveChart';
import LineLiveChart1 from './LineLiveChart1';
import CompareChart from "./CompareChart";
import '../../css/athena.css';

export default function Main() {
    return (
      <div className="bg-[#011710] p-10 z-0 relative">
        <div className="flex flex-col">
            {/* First Sector */}
            <div className="flex flex-col w-full grid-cols-1 gap-10 text-white cursor-pointer sm:flex-row">
                <div className="flex flex-col w-full gap-5 sm:w-2/5">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center gap-2 text-xl font-medium sm:text-2xl">
                            <img src="./img/market-btc.svg" className="w-8 h-8"></img>
                            Wrapped BTC
                            <MdOutlineKeyboardArrowDown className="w-5 h-5 text-[#30B778]"/>
                        </div>
                    </div>
                    <p className="max-w-3xl text-left">WBTC</p>
                    <a className="text-left underline text-[#30B778]">Swap Tokens</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 bg-[#223831] rounded-md p-4 w-full sm:w-3/5">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-[#30B778] text-3xl sm:text-4xl font-bold">$37.03M</p>
                        <p className="text-sm text-white">Reserve Size</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-[#30B778] text-3xl sm:text-4xl font-bold">$37.03M</p>
                        <p className="text-sm text-white">Avail. liquidity</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-[#30B778] text-3xl sm:text-4xl font-bold">3.46</p>
                        <p className="text-sm text-white">Utl. Rate</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-[#30B778] text-3xl sm:text-4xl font-bold">$46,63</p>
                        <p className="text-sm text-white">Oracle price</p>
                    </div>
                </div>
            </div>

            {/* Chart Modals */}
            <div className="grid grid-cols-1 gap-5 my-10 sm:grid-cols-2">
                <div className="bg-[#223831] border border-[#7E7D7D] text-[#30B778] font-medium text-xl text-left p-7 rounded-md">
                    {/* Title */}
                    <div className="font-semibold border-b border-[#7E7D7D] pb-5 flex justify-between items-center">
                        Your Supplies
                    </div>
                    <div className="relative flex flex-row items-center gap-10 my-10 text-white">
                        <div class="loader flex items-center justify-center">
                            96%
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-2xl">1.65K of 3,100.00</p>
                            <p className="text-lg border-b border-[#7E7D7D] pb-3">Total supplied</p>
                            <p className="text-lg">$76.81M of 76.81M</p>
                        </div>
                    </div>
                    {/* Profile */}
                    <div className="grid grid-cols-1 mt-4 sm:grid-cols-3 gap-5 bg-[#3C4F48] border border-[#7E7D7D] rounded-md p-4 mb-10">
                        <div className="flex flex-col items-start justify-center gap-2">
                            <p className="text-2xl font-bold text-white">95%</p>
                            <p className="text-sm text-[#CCCCCC]">MAX LTV</p>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2">
                            <p className="text-2xl font-bold text-white">95%</p>
                            <p className="text-sm text-[#CCCCCC]">Liquidation threshold</p>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2">
                            <p className="text-2xl font-bold text-white">95%</p>
                            <p className="text-sm text-[#CCCCCC]">Liquidation threshold</p>
                        </div>
                    </div>
                    <LineLiveChart />
                </div>
                <div className="bg-[#223831] border border-[#7E7D7D] text-[#30B778] font-medium text-xl text-left p-7 rounded-md">
                    <div className="font-semibold border-b border-[#7E7D7D] pb-5 flex justify-between items-center">
                        Your Borrowers
                    </div>
                    <div className="relative flex flex-row items-center gap-10 my-10 text-white">
                        <div class="loader flex items-center justify-center">
                            96%
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-2xl">1.65K of 3,100.00</p>
                            <p className="text-lg border-b border-[#7E7D7D] pb-3">Total supplied</p>
                            <p className="text-lg">$76.81M of 76.81M</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 mt-4 sm:grid-cols-3 gap-5 bg-[#3C4F48] border border-[#7E7D7D] rounded-md p-4 mb-10">
                        <div className="flex flex-col items-start justify-center gap-2">
                            <p className="text-2xl font-bold text-white">95%</p>
                            <p className="text-sm text-[#CCCCCC]">MAX LTV</p>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2">
                            <p className="text-2xl font-bold text-white">95%</p>
                            <p className="text-sm text-[#CCCCCC]">Liquidation threshold</p>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2">
                            <p className="text-2xl font-bold text-white">95%</p>
                            <p className="text-sm text-[#CCCCCC]">Liquidation threshold</p>
                        </div>
                    </div>
                    <LineLiveChart1 />
                </div>
            </div>

            {/* Interested Modal */}
            <div className="bg-[#223831] border border-[#7E7D7D] text-[#30B778] font-medium text-xl text-left p-7 rounded-md">
                    {/* Title */}
                    <div className="font-semibold border-b border-[#7E7D7D] mb-10 pb-5 flex justify-between items-center">
                        Interest rate model
                    </div>
                    <CompareChart />
                </div>
            </div>
      </div>
    )
}
