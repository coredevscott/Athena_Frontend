export default function StakeItem() {
    return (
        <div className="bg-[#223831] border border-[#7E7D7D] text-[#30B778] font-medium text-xl text-left p-7 rounded-md">
            {/* Title */}
            <div className="font-semibold border-b border-[#7E7D7D] pb-5 flex justify-between items-center">
                Stake ATNH
                <button className="bg-[#4D5753] text-[#BABABA] py-4 px-10 rounded-md text-sm border-[#716B6B]">Stake</button>
            </div>
            {/* Profile */}
            <div className="grid grid-cols-1 mt-4 sm:grid-cols-3 gap-5 bg-[#223831] rounded-md p-4">
                <div className="flex flex-col items-start justify-center gap-2">
                    <p className="text-[#30B778] text-2xl font-bold">$368.46M</p>
                    <p className="text-sm text-white">Funds in the Safety Module</p>
                </div>
                <div className="flex flex-col items-start justify-center gap-2">
                    <p className="text-[#30B778] text-2xl font-bold">820.00 ATHN</p>
                    <p className="text-sm text-white">Total emission per day</p>
                </div>
                <div className="flex flex-col items-start justify-center gap-2">
                    <p className="text-[#30B778] text-2xl font-bold">820.00 ATHN</p>
                    <p className="text-sm text-white">Total emission per day</p>
                </div>
            </div>
            {/* Options */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="flex flex-col gap-3 mt-4 bg-[#3C4F48] p-3 text-white rounded-md">
                    <p className="">Staked ATHN</p>
                    <div className="flex justify-between">
                        <p>$0</p>
                        <p>0 ATHN</p>
                    </div>
                    <div className="bg-[#30B778] rounded-md py-3 text-sm text-center">
                        Cooldown to stake
                    </div>
                </div>
                <div className="flex flex-col gap-3 mt-4 bg-[#3C4F48] p-3 text-white rounded-md">
                    <p className="">Claimable ATHN</p>
                    <div className="flex justify-between">
                        <p>$0</p>
                        <p>0 ATHN</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <button className="bg-[#30B778] text-white py-4 px-10 rounded-md text-sm border-[#716B6B]">Claim</button>
                        <button className="bg-[#4D5753] text-[#BABABA] py-4 px-10 rounded-md text-sm border-[#716B6B]">Stake</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
