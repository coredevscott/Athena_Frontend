import { FaRegPlayCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaBucket } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function Main() {
    const [tableContent, setTableContent] = useState([]);
    const [tableContent1, setTableContent1] = useState([]);

    useEffect(() => {
        let temp = [], temp1 = [];

        for(let i = 0; i < 8; i ++) {
            temp = [...temp, (
                <div className="grid grid-cols-5 min-w-[600px]">
                    <div className="flex flex-row items-center justify-start gap-2">
                        <img src='./img/sample-token.svg'></img>
                        <div className="flex flex-col gap-1">
                            <p className="font-bold text-white">PYT</p>
                            <p className="text-[#9EA7B3] text-sm">Python</p>
                        </div>
                    </div>
                    <div className="text-[#9EA7B3] flex items-center">$90.90</div>
                    <div className="text-[#9EA7B3] flex items-center">1.78%</div>
                    <div className="text-[#9EA7B3] flex items-center"><IoMdCheckmarkCircleOutline className="text-[#30B778] w-7 h-7"/></div>
                    <div className="text-[#9EA7B3] flex items-center"><button className='bg-[#30B778] rounded-md py-3 px-5 text-white text-sm hover:text-[#30B778] hover:bg-white transition-all duration-500'>Supply</button></div>
                </div>
            )];
        }

        setTableContent(temp);

        for(let i = 0; i < 8; i ++) {
            temp1 = [...temp1, (
                <div className="grid grid-cols-5 min-w-[600px]">
                    <div className="flex flex-row items-center justify-start gap-2">
                        <img src='./img/sample-token.svg'></img>
                        <div className="flex flex-col gap-1">
                            <p className="font-bold text-white">PYT</p>
                            <p className="text-[#9EA7B3] text-sm">Python</p>
                        </div>
                    </div>
                    <div className="text-[#9EA7B3] flex items-center">$90.90</div>
                    <div className="text-[#9EA7B3] flex items-center">1.78%</div>
                    <div className="text-[#9EA7B3] flex items-center"><IoMdCheckmarkCircleOutline className="text-[#30B778] w-7 h-7"/></div>
                    <div className="text-[#9EA7B3] flex items-center"><button className='bg-[#30B778] rounded-md py-3 px-5 text-white text-sm hover:text-[#30B778] hover:bg-white transition-all duration-500'>Borrow</button></div>
                </div>
            )];
        }

        setTableContent1(temp1);
    }, []);

    return (
      <div className="bg-[#011710] p-10 z-0 relative">
        <div className="flex flex-col">
            {/* First Sector */}
            <div className="grid w-full grid-cols-1 gap-10 text-white cursor-pointer sm:grid-cols-2">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center gap-2 text-xl font-medium sm:text-2xl">
                            <img src="./img/market-polygon.png" className="w-8 h-8"></img>
                            Polygon
                            <MdOutlineKeyboardArrowDown className="w-5 h-5 text-[#30B778]"/>
                        </div>
                        <button className='bg-[#30B778] rounded-md py-3 px-5 text-white text-sm hover:text-[#30B778] hover:bg-white transition-all duration-500'>View Transaction</button>
                    </div>
                    <p className="max-w-3xl text-left">Anyone can invest money to different currency to increase their earnings by the help of MAP through online.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 bg-[#223831] rounded-md p-4">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-[#30B778] text-3xl sm:text-4xl font-bold">$90.90</p>
                        <p className="text-sm text-white">Your Balance</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-[#30B778] text-3xl sm:text-4xl font-bold">$0.00</p>
                        <p className="text-sm text-white">Net worth</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-[#30B778] text-3xl sm:text-4xl font-bold">$0.00</p>
                        <p className="text-sm text-white">Net APY</p>
                    </div>
                </div>
            </div>

            {/* Second Sector */}
            <div className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2">
                <div className="bg-[#223831] border border-[#7E7D7D] text-[#30B778] font-medium text-xl text-left p-7 rounded-md">
                    <div className="border-b border-[#7E7D7D] pb-5">Your Supplies</div>
                    <div className="flex flex-col gap-5 mt-10 items-center text-[#7E7D7D] justify-center">
                        <FaBucket className="w-14 h-14"/>
                        <p>Nothing supplied yet</p>
                    </div>
                </div>
                <div className="bg-[#223831] border border-[#7E7D7D] text-[#30B778] font-medium text-xl text-left p-7 rounded-md">
                    <div className="border-b border-[#7E7D7D] pb-5">Your Borrows</div>
                    <div className="flex flex-col gap-5 mt-10 items-center text-[#7E7D7D] justify-center">
                        <FaBucket className="w-14 h-14"/>
                        <p>Nothing borrowed yet</p>
                    </div>
                </div>
            </div>

            {/* Third Sector */}
            <div className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2">
                <div className="bg-[#223831] border overflow-auto border-[#7E7D7D] flex flex-col gap-5 text-left p-7 rounded-md">
                    <div className="text-[#30B778] font-medium text-xl">Assets to supply</div>
                    <div className="grid grid-cols-5 text-white min-w-[600px]">
                        <div>Assets to supply</div>
                        <div>W.Balnace</div>
                        <div>APY</div>
                        <div>Collateral</div>
                        <div>Detail</div>
                    </div>
                    {tableContent}
                </div>
                <div className="bg-[#223831] border overflow-auto border-[#7E7D7D] flex flex-col gap-5 text-left p-7 rounded-md">
                    <div className="text-[#30B778] font-medium text-xl">Assets to borrow</div>
                    <div className="grid grid-cols-5 text-white min-w-[600px]">
                        <div>Assets to supply</div>
                        <div>W.Balnace</div>
                        <div>APY</div>
                        <div>Collateral</div>
                        <div>Detail</div>
                    </div>
                    {tableContent1}
                </div>
            </div>
        </div>
      </div>
    )
}
