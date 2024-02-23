import { FiExternalLink } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import ProposalItem from './ProposalItem';
import { BsCopy } from "react-icons/bs";

export default function Main() {
    return (
      <div className="bg-[#011710] p-10 z-0 relative">
        <div className="flex flex-col">
            {/* First Sector */}
            <div className="grid w-full grid-cols-1 gap-10 text-white sm:grid-cols-2">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center gap-2 text-xl font-medium sm:text-2xl">
                            <img src="./img/market-ethereum.svg" className="w-8 h-8"></img>
                            Ethereum Governance
                        </div>
                    </div>
                    <p className="max-w-3xl text-left">ATNHENA fully decentralized, community governed protocol by the ATNHENA token-holders. AAVE token-holders collectively discuss, propose, and vote on upgrades to the protocol. AAVE token-holders (Ethereum network only) can either vote themselves on new proposals or delagate to an address of choice. To learn more check out the Governance. </p>
                    <a className="text-left underline text-[#30B778]">Documentation</a>
                    <div className='flex flex-row gap-2'>
                        <div className='py-2 px-5 rounded-md flex-row gap-2 bg-[#4D5753] text-[#BABABA] flex items-center text-sm'>
                            FAQ
                            <FiExternalLink className='w-4 h-4'/>
                        </div>
                        <div className='py-2 px-5 rounded-md flex-row gap-2 bg-[#4D5753] text-[#BABABA] flex items-center text-sm'>
                            Governance
                            <FiExternalLink className='w-4 h-4'/>
                        </div>
                    </div>
                    <div className="bg-[#213630] flex gap-10 flex-col lg:flex-row justify-between p-2 rounded-md border border-[#7E7D7D]">
                        <div className="flex flex-row justify-center gap-5">
                            <button className="bg-[#30B778] text-white py-2 px-4 sm:px-7 rounded-md">All</button>
                            <button className="bg-[#3C4E49] text-[#BABABA] border border-[#7E7D7D] px-4 sm:px-7 sm:text-md text-sm rounded-md">Active</button>
                        </div>
                        <div className="flex flex-row justify-center gap-5">
                            <div className='relative'>
                                <input type="text" placeholder='ETH' className='bg-[#3C4E49] rounded-md p-3 text-sm w-[170px] sm:w-[300px]'></input>
                                <div className='absolute text-white transform -translate-y-1/2 right-1 cursor-pointer top-1/2 bg-[#30B778] p-2 rounded-md'><IoSearch className='w-5 h-5'/></div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#213630] rounded-md border border-[#7E7D7D] p-2">
                        <div className="text-[#30B778] text-left text-xl font-semibold border-b border-[#7E7D7D] py-3">Proposals</div>
                        <ProposalItem />
                        <ProposalItem />
                        <ProposalItem />
                        <ProposalItem />
                        <ProposalItem />
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="bg-[#213630] rounded-md border border-[#7E7D7D] p-5">
                        <div className="flex flex-col gap-1 text-[#30B778] text-left text-xl font-semibold border-b border-[#7E7D7D] pb-3">
                            Your Info
                            <div className="text-[#B7B7B7] font-normal text-lg flex flex-col sm:flex-row gap-2 overflow-hidden sm:gap-10 items-center">
                                0x1e68c0x1e60x1e68c0x1e60x1e68c0x1e6.......68c0x1
                                <BsCopy className="cursor-pointer"/>
                            </div>    
                        </div>
                        <div className="grid grid-cols-2 mt-5">
                            <div className="flex flex-col gap-2 text-left text-[#807B7B] text-xl">
                                Voting Power
                                <p className="text-lg text-white">0</p>
                            </div>
                            <div className="flex flex-col gap-2 text-left text-[#807B7B] text-xl">
                                Proposition Power
                                <p className="text-lg text-white">0</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#213630] rounded-md border border-[#7E7D7D] p-5">
                        <div className="flex flex-row justify-between gap-1 text-[#30B778] text-left text-xl font-semibold border-b border-[#7E7D7D] pb-3">
                            Delegated Power
                            <FiExternalLink className="w-6 h-6 cursor-pointer"/>
                        </div>
                        <div className="text-[#807B7B] text-left mt-3 flex flex-col gap-1">
                            Use your ANTHENA balance to delegate your voting and proposition powers. You will not be sending any tokens, only the rights to vote and propose changes to the protocol. You can re-delegate or revoke power to self at any time.
                            <p className="text-[#30B778] underline">Learn More</p>
                        </div>
                        <div className="text-[#BABABA] bg-[#4D5753] rounded-md border border-[#7E7D7D] py-3 mt-4 cursor-pointer">Setup Delegation</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}
