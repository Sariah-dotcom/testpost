import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";


export default function Card(props) {
  return (
    <div className="group lg:w-[22rem] relative cursor-pointer h-[20rem] lg:h-[25rem] bg-[#F6F6F6] rounded-lg shadow-md flex flex-col gap-5 px-5 py-10 hover:-rotate-1 cursor:pointer hover:bg-[#001A6E] hover:scale-101 transition-transform duration-300">
      <div className="text-4xl text-gray-900 group-hover:text-white">{props.icon}</div>

      <div className="flex flex-col gap-5">
        <h3 className="font-semibold uppercase text-sm md:text-[1rem] text-gray-900 group-hover:text-white">{props.title}</h3>
        <p className="text-sm text-gray-500 group-hover:text-white">{props.text}</p>
        <button className="absolute bottom-5 group-hover:text-[#A0C2F4] lg:mt-30 mt-2 font-semibold text-[#383838] text-sm py-1 rounded transition flex items-center gap-1">Learn More <IoIosArrowForward className='group-hover:ml-2 transition-transform duration-500' /></button>
      </div>
    </div>
  );
}
