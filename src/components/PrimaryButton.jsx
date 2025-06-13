import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

export default function PrimaryButton(props) {
  return (
    <Link className='button flex gap-1 items-center justify-center bg-[#001A6E] 
    text-white text-xs md:text-sm py-2 px-3 rounded-[1.5rem] md:px-5 md:py-3 hover:bg-[#A0C2F4] hover:text-[#001A6E] hover:gap-2 transition-all duration-300' 
    to={props.link}>
      {props.btnText}
      <IoIosArrowForward />
    </Link>
  )
}
