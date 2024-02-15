import { FiHome, FiUsers, FiUser } from "react-icons/fi";
import { BsDiagram2 } from "react-icons/bs";
import { MdRadar, MdAirlineStops, MdLogout } from "react-icons/md";
import { FaCubesStacked } from "react-icons/fa6";
import { IoLayersOutline } from "react-icons/io5";
import { MdAutoGraph } from "react-icons/md";
import { TbWorldDollar } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { RiExchangeLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const sidebarList = [
  {imgSrc: <FaCubesStacked className="w-5 h-5"/>, title: "Dashboard", url: "/dashboard"},
  {imgSrc: <MdAutoGraph className="w-5 h-5"/>, title: "Markets", url: "/market"},
  {imgSrc: <IoLayersOutline className="w-5 h-5"/>, title: "Stake", url: "/dashboard"},
  {imgSrc: <TbWorldDollar className="w-5 h-5"/>, title: "Governance", url: "/dashboard"},
  {imgSrc: <IoWalletOutline className="w-5 h-5"/>, title: "MyWallet", url: "/dashboard"},
  {imgSrc: <RiExchangeLine className="w-5 h-5"/>, title: "Transactions", url: "/dashboard"},
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState(2);

  useEffect(() => {
    for(let i = 0; i < sidebarList.length; i ++)
      if(window.location.href.includes(sidebarList[i].url)) {
        setActiveItem(i);
        break;
      }
  }, [window.location.href]);

  return (
      <div className="md:flex hidden group relative h-screen text-[#A69F9F] flex-col gap-10 px-5 bg-[#21372F] border border-[#21372F] w-[70px] hover:w-[200px] transition-all duration-500">
      <img src="./img/logo.svg" className="w-40 h-20 mt-10"></img>
      {sidebarList.map((item, index) => (
          <Link to={item.url}><div className={"flex flex-row gap-4 items-center justify-start cursor-pointer " + (activeItem != index ? "text-[#9FA7B1] hover:text-white" : "text-white")}>
              <div>{item.imgSrc}</div>
              <div className="text-left w-0 overflow-hidden transition-all duration-500 group-hover:w-[110px]">{item.title}</div>
          </div></Link>
      ))}
      <Link to="/"><div className="absolute group-hover:w-[152px] w-[70px] bottom-10 left-5 flex flex-row gap-3 items-center justify-start cursor-pointer text-[#9FA7B1] hover:text-white"><MdLogout className="w-5 h-5 "/><p className="w-0 overflow-hidden group-hover:w-[70px] transition-all duration-500">LogOut</p></div></Link>
  </div>
  )
}
