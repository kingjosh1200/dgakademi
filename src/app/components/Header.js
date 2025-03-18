import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";


const Header = () => {
  return (
   <div className='flex  mt-[10px] px-20 text-[#2E335B] justify-between'>
      <div className="flex gap-4">
        <div className='flex gap-2'>
            <img className="h-8" src="/image/dgakademi.png" />
            <p className="mt-2 font-bold text-[15px]">Dgakademi</p>
        </div>
        <div className='flex space-x-1 bg-[#FCFBF9] rounded-full p-1 h-8'>
            <CiSearch className='mt-[3px]' />
            <input type='text' placeholder='search' className='pe-10 border-none outline-none' />
        </div>
      </div>
      <div className="flex space-x-3">
        <div className='font-bold text-[10px] mt-1'>EN</div>
        <IoIosNotificationsOutline className='mt-1' />
        <img className="h-6" src="/image/Avatar.png" />
      </div>
   </div>
  )
}

export default Header
