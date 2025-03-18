import React from 'react'
import { PiHouseDuotone } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { FaRegComments } from "react-icons/fa6";
import { HiOutlineWallet } from "react-icons/hi2";
import { PiChartPieLight } from "react-icons/pi";
import { PiStarFourLight } from "react-icons/pi";
import { PiUserCircleLight } from "react-icons/pi";
import { PiNutLight } from "react-icons/pi";

const Menu = () => {
  return (
    <div className='px-20 mt-20 flex flex-col gap-20  text-[#2E335B]' >
        <div className='flex flex-col gap-4'>
            <div className='flex gap-3'>
                <PiHouseDuotone  className='mt-1'/>
                <div className='text-[10px] font-bold mt-1'>Overview</div>
            </div>
            <div className='flex gap-3'>
                <TfiEmail className='mt-[4px]'/>
                <div className='text-[10px] font-bold mt-1'>Message</div>
                <div className="bg-red-500 rounded h-[9px] px-[2px] text-white text-[6px] mt-[6px]">2</div>
            </div>
            <div className='flex gap-3'>
                <FaRegComments  className='mt-1'/>
                <div className='text-[10px] font-bold mt-1'>Community</div>
            </div>
            <div className='flex gap-3'>
                <HiOutlineWallet className='mt-[4px]'/>
                <div className='text-[10px] font-bold mt-1'>Payment</div>
            </div>
            <div className='flex gap-3'>
                <PiChartPieLight  className='mt-1'/>
                <div className='text-[10px] font-bold mt-1'>Statistics</div>
            </div>
            <div className='flex gap-3'>
                <PiStarFourLight className='mt-[4px]'/>
                <div className='text-[10px] font-bold mt-1'>Referrals</div>
            </div>
        </div>

        <div className='flex flex-col gap-4'>
            <div className='flex gap-3'>
                <PiUserCircleLight  className='mt-1'/>
                <div className='text-[10px] font-bold mt-1'>Accounts</div>
            </div>
            <div className='flex gap-3'>
                <PiNutLight className='mt-[4px]'/>
                <div className='text-[10px] font-bold mt-1'>Settings</div>
            </div> 
        </div>
    </div>
  )
}

export default Menu
