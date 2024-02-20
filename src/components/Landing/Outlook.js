import '../../css/athena.css';

const stats = [
    { id: 1, imgUrl: '../img/outlook-icon1.svg', name: 'Cross-chain asset lending', content: 'ATHENA can implement a true cross-chain lending platform, allowing users to mortgage assets on one chain to borrow assets on another chain. This not only improves asset utilization, but also provides users with more flexibility and choice.' },
    { id: 2, imgUrl: '../img/outlook-icon2.svg', name: 'Decentralized financial product innovation', content: 'Using MAP’s interoperability layer, ATHENA can innovatively develop diversified DeFi products, such as cross-chain liquidity pools, cross-chain mortgages, and cross-chain revenue farms, to promote further development in the DeFi field. develop.' },
    { id: 3, imgUrl: '../img/outlook-icon3.svg', name: 'Enhanced user experience&accessibility', content: 'By simplifying the complexity of cross-chain interactions, ATHENA can provide a user-friendly interface so that non-technical users can easily participate in cross-chain lending activities and broaden the user base of DeFi.' },
    { id: 4, imgUrl: '../img/outlook-icon4.svg', name: 'Secure and transparent trading environment', content: 'Based on the powerful security features of MAP, ATHENA can ensure the security and transparency of cross-chain transactions, reduce intermediate links, and reduce the risk of attack.' },
]

export default function Outlook() {
return (
    <div className="py-24 bg-[#011A13] sm:py-32 text-white">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="text-3xl sm:text-4xl ">
                Reasonable Outlook
            </div>
            <dl className="grid grid-cols-1 mt-20 text-left gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <div className="flex flex-col items-start justify-start max-w-xs mx-auto gap-y-4 bg-[#032A1F] rounded-md p-3 border-b-4 border-[#30B778]">
                        <img src={stat.imgUrl} className='w-20 h-20'></img>
                        <div className="text-lg font-semibold tracking-tight sm:text-xl">
                            {stat.name}
                        </div>
                        <div className="text-sm leading-7">{stat.content}</div>
                    </div>
                ))}
            </dl>
        </div>
    </div>
    )
}
