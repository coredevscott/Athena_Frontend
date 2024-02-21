import '../../css/athena.css';

export default function Roadmap() {
    return (
      <div className="py-12 bg-[#021A13] sm:py-20 text-white relative">
        <img src="../img/roadmap-foreground.svg" className='absolute top-0 right-0'></img>
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <p className='text-[#5CDD98] underline font-semibold'>Project</p>
            <h2 className="mt-6 text-3xl font-medium leading-8 text-center sm:text-4xl MichromaFont">
                Our Roadmap
            </h2>
            <div className='grid grid-cols-1 gap-5 mt-32 md:grid-cols-2 lg:grid-cols-4'>
                <img src="../img/roadmap-line.svg" className='absolute left-0 w-full transform translate-y-[80px] top-1/2 lg:block hidden'></img>
                <div className='relative flex flex-col gap-32'>
                    <img src="../img/roadmap-item-back.svg" className='absolute top-0 left-0'></img>
                    <div className='flex flex-col h-[275px] bg-[#043125] rounded-md p-5 border-t-4 border-[#30B778] gap-5 items-center text-left text-[#DADBDF]'>
                        <img src="../img/roadmap-icon1.svg" className='w-15 h-15'></img>
                        Launch a comprehensive chain staking and lending platform, opening up the staking and lending features.
                    </div>
                    <div className='h-[275px] md:block relative hidden'>
                        Q1<br />2024
                        <img src="../img/roadmap-circle.svg" className='absolute top-0 transform -translate-x-1/2 -translate-y-[90px] left-1/2'></img>
                    </div>
                </div>
                <div className='flex flex-col justify-end gap-32'>
                    <div className='relative hidden md:block'>
                        Q2<br />2024
                        <img src="../img/roadmap-circle.svg" className='absolute top-0 transform -translate-x-1/2 translate-y-[85px] left-1/2'></img>
                    </div>
                    <div className='relative flex h-[275px] flex-col bg-[#043125] rounded-md p-5 border-t-4 border-[#30B778] gap-5 items-center text-left text-[#DADBDF]'>
                        <img src="../img/roadmap-item-back.svg" className='absolute top-0 left-0'></img>
                        <img src="../img/roadmap-icon2.svg" className='w-15 h-15'></img>
                        Test the integration of an accessibility-friendly cross-chain exchange solution with the MAP protocol, opening up SWAP testing.
                    </div>                   
                </div>
                <div className='flex flex-col gap-32'>
                    <div className='relative flex h-[275px] flex-col bg-[#043125] rounded-md p-5 border-t-4 border-[#30B778] gap-5 items-center text-left text-[#DADBDF]'>
                        <img src="../img/roadmap-item-back.svg" className='absolute top-0 left-0'></img>
                        <img src="../img/roadmap-icon3.svg" className='w-15 h-15'></img>
                        Achieve multi-chain deployment. Release an SDK for a comprehensive chain payment tool, enabling GAS-free payments.
                    </div>
                    <div className='h-[275px] md:block hidden relative'>
                        Q3<br />2024
                        <img src="../img/roadmap-circle.svg" className='absolute top-0 transform -translate-x-1/2 -translate-y-[90px] left-1/2'></img>
                    </div>
                </div>
                <div className='flex flex-col justify-end gap-32'>
                    <div className='relative hidden md:block'>
                        Q4<br />2024
                        <img src="../img/roadmap-circle.svg" className='absolute top-0 transform -translate-x-1/2 translate-y-[85px] left-1/2'></img>
                    </div>
                    <div className='relative flex h-[275px] flex-col bg-[#043125] rounded-md p-5 border-t-4 border-[#30B778] gap-5 items-center text-left text-[#DADBDF]'>
                        <img src="../img/roadmap-item-back.svg" className='absolute top-0 left-0'></img>
                        <img src="../img/roadmap-icon4.svg" className='w-15 h-15'></img>
                        Release version 2, integrating lending and exchange functionalities.
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}
