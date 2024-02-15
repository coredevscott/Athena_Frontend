import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

export default function Main() {
    const [tableContent, setTableContent] = useState([]);

    useEffect(() => {
        let temp = [];

        for(let i = 0; i < 8; i ++) {
            temp = [...temp, (
                <div className="grid grid-cols-7 min-w-[900px] text-white border-t border-[#807B7B] pt-3">
                    <div className="flex flex-row items-center justify-start gap-2">
                        <img src='./img/atom.svg'></img>
                        <p className="font-medium">Atom</p>
                    </div>
                    <div className="flex flex-col gap-1 text-left">
                        <div className="font-semibold">1.57K</div>
                        <div className="text-[#5CDD98]">$66.46M</div>
                    </div>
                    <div className="flex items-center">0.01%</div>
                    <div className="flex flex-col gap-1 text-left">
                        <div className="font-semibold">1.57K</div>
                        <div className="text-[#5CDD98]">$66.46M</div>
                    </div>
                    <div className="flex items-center">0.38%</div>
                    <div className="flex items-center"><img src="./img/market-stats.svg"></img></div>
                    <div className="flex items-center"><button className='bg-[#30B778] rounded-md py-3 px-5 text-white text-sm hover:text-[#30B778] hover:bg-white transition-all duration-500'>Details</button></div>
                </div>
            )];
        }

        setTableContent(temp);
    }, []);

    return (
      <div className="bg-[#011710] p-10 z-0 relative">
        <div className="flex flex-col">
            {/* First Sector */}
            <div className="grid w-full grid-cols-1 gap-10 text-white cursor-pointer sm:grid-cols-2">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center gap-2">
                            <img src="./img/market-polygon.png" className="w-8 h-8"></img>
                            Polygon
                            <MdOutlineKeyboardArrowDown className="w-5 h-5 text-[#30B778]"/>
                        </div>
                    </div>
                    <p className="max-w-xl text-left">Anyone can invest money to different currency to increase their earnings by the help of MAP through online.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 bg-[#223831] rounded-md p-4">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-[#30B778] text-2xl font-bold">$375.88M</p>
                        <p className="text-sm text-white">Total market</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-[#30B778] text-2xl font-bold">$257.22M</p>
                        <p className="text-sm text-white">Total available</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-[#30B778] text-2xl font-bold">$118.67M</p>
                        <p className="text-sm text-white">Total borrows</p>
                    </div>
                </div>
            </div>

            {/* Second Sector */}
            <div className="bg-[#213630] flex gap-10 flex-col lg:flex-row justify-between p-2 mt-10 rounded-md border border-[#807B7B]">
                <div className="flex flex-row justify-center gap-5">
                    <button className="bg-[#30B778] text-white py-2 px-4 sm:px-7 rounded-md">All</button>
                    <button className="bg-[#3C4E49] text-[#C8BEBE] border border-[#807B7B] px-4 sm:px-7 sm:text-md text-sm rounded-md">Trending</button>
                    <button className="bg-[#3C4E49] text-[#C8BEBE] border border-[#807B7B] px-4 sm:px-7 sm:text-md text-sm rounded-md">High Volume</button>
                </div>
                <div className="flex flex-row justify-center gap-5">
                    <div className='relative'>
                        <input type="text" placeholder='ETH' className='bg-[#3C4E49] rounded-md p-3 text-sm w-[170px] sm:w-[300px]'></input>
                        <div className='absolute text-white transform -translate-y-1/2 right-1 cursor-pointer top-1/2 bg-[#30B778] p-2 rounded-md'><IoSearch className='w-5 h-5'/></div>
                    </div>
                    <button className="bg-[#3C4E49] px-4 sm:px-7 sm:text-md text-sm text-[#C8BEBE] border border-[#807B7B] py-2 rounded-md">View More</button>
                </div>
            </div>

            {/* Third Sector */}
            <div className="w-full">
                <div className="bg-[#223831] border overflow-auto border-[#7E7D7D] flex flex-col gap-5 text-left p-7 rounded-md mt-10">
                    <div className="grid grid-cols-7 text-white min-w-[900px]">
                        <div>Asset</div>
                        <div>Total Supplied</div>
                        <div>Supply APY</div>
                        <div>Total Borrowed</div>
                        <div>Borrow APY, variable</div>
                        <div>Stats</div>
                        <div>Info</div>
                    </div>
                    {tableContent}
                </div>
            </div>
        </div>
      </div>
    )
}
