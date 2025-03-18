import React from "react";
import { PiArmchairLight } from "react-icons/pi";
import { PiCoins } from "react-icons/pi";
import { PiTaxiLight } from "react-icons/pi";
import { PiBusLight } from "react-icons/pi";
import { PiAirplane } from "react-icons/pi";
import { PiGasPumpLight } from "react-icons/pi";
import { CiDumbbell } from "react-icons/ci";
import { HiDotsHorizontal } from "react-icons/hi";

const MenuInfo = () => {
  return (
    <div className="bg-[#FCFBF9] p-8 rounded-3xl mt-8  text-[#2E335B] flex gap-5">
      <div>
        <div className="flex gap-4">
          <div>
            <div className="mb-6 font-bold ">Dashboard</div>
            <img src="/image/Card.png" alt="" />
          </div>
          <div>
            <div className="mb-6 font-bold ">Upcoming payments</div>
            <div className="flex gap-5">
              <div className="bg-[#F5F5F5] rounded-xl p-4 px-5">
                <div className="bg-[#2E335B] rounded-xl text-white w-[58px] p-2">
                  <PiArmchairLight size={40} />
                </div>
                <p className="font-bold text-[15px] ">Freelance</p>
                <p className="text-[10px] mb-2">Unregular payments</p>
                <p className="font-bold text-[25px]">$1,500</p>
              </div>

              <div className="bg-[#F5F5F5] rounded-xl p-4 px-5">
                <div className="bg-[#2E335B] rounded-xl text-white w-[58px] p-2">
                  <PiCoins size={40} />
                </div>
                <p className="font-bold text-[15px] ">Salary</p>
                <p className="text-[10px] mb-2">Regular payments</p>
                <p className="font-bold text-[25px]">$4,000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <div className="font-bold">Recent transaction</div>
            <div>
              <select className="outline-none border-2 border-[#2e335b1d] text-[10px] pr-6 rounded">
                <option>Sort by</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between mt-5">
            <div className="flex flex-col justify-between gap-4">
              <PiTaxiLight />
              <PiBusLight />
              <PiAirplane />
              <PiGasPumpLight />
              <CiDumbbell />
            </div>

            <div className="flex flex-col justify-between font-bold text-[14px]">
              <p>Taxi Trips</p>
              <p>Public Transport</p>
              <p>Plane Ticket</p>
              <p>Gas Station</p>
              <p>Gym</p>
            </div>

            <div className="flex flex-col justify-between text-[10px] text-[#2e335b73]">
              <p>03 Aug 2022, 15:43</p>
              <p>03 Aug 2022, 15:43</p>
              <p>03 Aug 2022, 15:43</p>
              <p>03 Aug 2022, 15:43</p>
              <p>03 Aug 2022, 15:43</p>
            </div>

            <div className="flex flex-col justify-between font-bold text-[14px]">
              <p>$56.50</p>
              <p>$2.50</p>
              <p>$70</p>
              <p>$30.75</p>
              <p>$100.00</p>
            </div>

            <div className="flex flex-col justify-between">
              <HiDotsHorizontal />
              <HiDotsHorizontal />
              <HiDotsHorizontal />
              <HiDotsHorizontal />
              <HiDotsHorizontal />
           </div>
        </div>
       </div>
       </div>
       <div className="bg-[#F5F5F5]  text-[#2E335B] rounded-3xl p-4" >
       <div className="text-[10px]">spent this day</div>
       <div className="flex justify-between mb-3">
        <div className="font-bold text-[20px]">$259.75</div>
        <div>
          <select className="outline-none border-2 border-[#2e335b1d] text-[10px]  pr-2 rounded">
            <option>week </option>
          </select>
        </div>
       </div>
       <div>
        <img className="w-[200px]" src="/image/Table.png"/>
       </div> 
        <div className="flex justify-between mt-6">
          <div className="font-bold">Available cards</div>
          <div className="text-[12px]">View all</div>
        </div>  

        <div className="bg-[#DBDDDC]  text-[#2E335B] rounded-xl p-6 flex gap-2 mt-5">
          <div className="flex">
          <div className="font-bold">98,500</div>
          <p className="">USD</p>
          </div>
          <div className="flex">
          <HiDotsHorizontal className="font-bold mt-2"/>
          <div className="font-bold">4141</div>
          </div>
          </div>
          
        <div className="bg-[#DBDDDC]  text-[#2E335B] rounded-xl p-6 flex gap-2 mt-3">
          <div className="flex">
          <div className="font-bold">76,280</div>
          </div>
          <div className="flex">
          <p className="">EUR</p>
          </div>
          <div className="flex">
          <HiDotsHorizontal className="font-bold mt-2"/>
          <div className="font-bold">8345</div>
          </div>
          <div>
            <img className="mt-1" src="/image/Vector (5).png"  />
          </div>
          </div>
          
          
       </div>
    </div>
  );
};

export default MenuInfo;
