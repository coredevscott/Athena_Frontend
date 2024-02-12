import { FaRegPlayCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function Main() {
    return (
      <div className="bg-[#011710] z-0 relative">
        <img src="./img/main-back-gradient.png" className="absolute bottom-0 right-0 z-10"></img>
        <div className="py-16 mx-auto sm:px-6 sm:py-20 lg:px-8">
          <div className="relative grid grid-cols-1 px-6 pt-16 isolate sm:rounded-3xl sm:px-16 md:pt-24 lg:grid-cols-2 lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="max-w-2xl mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-semibold leading-loose tracking-wide text-white sm:text-6xl">
                Invest Your Money 
                <br />
                <p className="flex flex-row">With <p className="text-[#30B778]">Higher Return</p></p>
              </h2>
              <p className="max-w-xl mt-6 text-lg leading-8 text-gray-300">
                Anyone can invest money to different currency to increase their earnings by the help of MAP through online.
              </p>
              <div className="flex items-center justify-center mt-10 gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md py-4 px-5 bg-[#30B778] hover:bg-white transition-all duration-500 hover:text-[#30B778] items-center flex flex-row gap-2 text-white text-sm border border-[#30B778] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started<FaArrowRight className="w-4 h-4"/>
                </a>
                <a href="#" className="text-sm rounded-md flex flex-row gap-2 py-4 px-5 border border-[#30B778] hover:text-[#30B778] hover:bg-white transition-all duration-500 text-[#30B778]">
                    <FaRegPlayCircle className="w-5 h-5"/>Watch Video
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img src="./img/main-foreground.png"></img>
              {/* <img src="./img/main-back-gradient.png" className="absolute top-0 left-0 z-10"></img> */}
            </div>
          </div>
        </div>
      </div>
    )
}
