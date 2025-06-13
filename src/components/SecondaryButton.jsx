import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";


export default function SecondaryButton(props) {
  return (
    <Link className='button flex gap-1 items-center justify-center bg-[#383838] text-white text-xs md:text-sm py-2 px-3 rounded-[1.5rem] md:px-5 md:py-3
    hover:bg-[#969595] hover:text-[#000] hover:gap-2 transition-all duration-300' 
    to={props.link}>
      {props.btnText}
        <IoIosArrowForward />
    </Link>
  )
}
