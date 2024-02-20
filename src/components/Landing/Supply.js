import '../../css/athena.css';

export default function Supply() {
    return (
      <div className="py-8 bg-[#002A1E] border-t-8 border-b-8 border-[#021A13] sm:py-12 relative">
        <img src="./img/supply-up-triangle.png" className="absolute lg:block hidden top-[-25%] left-0"></img>
        <img src="./img/supply-bottom-triangle.png" className="absolute bottom-[-33%] z-10 right-0 hidden lg:block"></img>
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <dl className="grid grid-cols-1 text-left gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="flex flex-row gap-10">
              <div className="flex flex-row gap-5">
                <div className="bg-[#616261] w-3 rounded-xl h-[150px] relative">
                  <div className="absolute w-full h-1/4 bg-[#5CDD98] rounded-xl"></div>
                </div>
                <p className="text-[#4C6961] text-6xl">01</p>
              </div>
              <div className="flex flex-col max-w-xs mx-auto gap-y-4">
                <div className="text-base leading-7 text-white">Borrow against your collateral from across multiple networks and assets.</div>
                <div className="order-first text-3xl font-semibold tracking-tight text-white sm:text-4xl MichromaFont">
                  Supply
                </div>
              </div>
            </div>

            <div className="flex flex-col max-w-xs mx-auto gap-y-4">
                <div className="text-base leading-7 text-white">of liquidity is locked in Aave across 8 networks and over 15 markets..</div>
                <div className="order-first text-3xl font-semibold tracking-tight text-white sm:text-4xl MichromaFont">
                  $10,901,188,124.74
                </div>
            </div>
          </dl>
        </div>
      </div>
    )
}
