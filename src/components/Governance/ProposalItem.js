import { FiExternalLink } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

export default function ProposalItem() {
    return (
        <div className="flex flex-row justify-between mt-4 bg-[#3C4F48] rounded-md p-3 border border-[#7E7D7D]">
            <div className="flex flex-col gap-1 text-left">
                <p className="text-[#D9D5D5]">stATHN Balancer V2 migration</p>
                <p className="text-lg text-white">ends in 3 days</p>
                <div className="flex justify-start">
                    <button className="text-[#30B778] text-sm border border-[#30B778] flex flex-row rounded-md items-center gap-2 p-2 bg-[#4D5753]">Active<FiExternalLink className='w-5 h-5'/></button>
                </div>
            </div>
            <div className="flex flex-col w-1/3 gap-1">
                <div className="flex justify-between">
                    <p className="font-medium text-white">YAE (178K)</p>
                    <p>89%</p>
                </div>
                <div className="relative h-2 bg-white rounded-md">
                    <div className="absolute top-0 left-0 w-2/3 bg-[#30B778] h-2 rounded-md"></div>
                </div>
                <div className="flex justify-between mt-3">
                    <p className="font-medium text-white">YAE (178K)</p>
                    <p>89%</p>
                </div>
                <div className="relative h-2 bg-white rounded-md">
                    <div className="absolute top-0 left-0 w-2/3 bg-[#30B778] h-2 rounded-md"></div>
                </div>
            </div>
        </div>
    )
}
