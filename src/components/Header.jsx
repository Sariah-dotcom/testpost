import React, { useRef, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Header() {
  const menuLinks = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  //Toggle menu display
  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  useGSAP(() => {
    if (menuOpen) {
        gsap.fromTo(
        menuLinks.current.querySelectorAll('.mobile-menu-link'),
        {
            x: 50,
            opacity: 0,
        },
        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3"
        }
        );
    }
  }, [menuOpen]);

  return (
   <nav className='flex items-center justify-between py-2 md:p-5 lg:px-10'>
        <Link to='/'>
            <img className="h-9 lg:h-12" src="/logo.png" alt="svg-post-logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-sm">
            <Link className='hover:text-[#0016AE] hover:underline hover:font-bold transform transition-all duration-500' to="/" >Home</Link>
            <Link className='hover:text-[#0016AE] hover:underline hover:font-bold transform transition-all duration-500' to="/About" >About Us</Link>
            <Link className='hover:text-[#0016AE] hover:underline hover:font-bold transform transition-all duration-500' to="/Services" >Services</Link>
            <Link className='hover:text-[#0016AE] hover:underline hover:font-bold transform transition-all duration-500' to="/Rates" >Rates</Link>
            <Link className='hover:text-[#0016AE] hover:underline hover:font-bold transform transition-all duration-500' to="/Contact" >Contact</Link>
        </div>

        <IoMenu className="text-3xl cursor-pointer md:hidden text-[#03154E]" onClick={toggleMenu} />

        {/* Sliding Mobile Menu */}
        <div
            className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#001A6E] text-white p-5 z-50 transition-transform duration-300 ease-in-out transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
            }`}>
            <IoMdClose className="text-3xl ml-auto cursor-pointer" onClick={toggleMenu} />

            <div className="mt-10 flex flex-col gap-6 text-lg font-semibold" ref={menuLinks}>
                <Link className="mobile-menu-link" to="/" onClick={toggleMenu}>Home</Link>
                <Link className="mobile-menu-link" to="/about" onClick={toggleMenu}>About Us</Link>
                <Link className="mobile-menu-link" to="/services" onClick={toggleMenu}>Services</Link>
                <Link className="mobile-menu-link" to="/rates" onClick={toggleMenu}>Rates</Link>
                <Link className="mobile-menu-link" to="/contact" onClick={toggleMenu}>Contact</Link>
            </div>
        </div>

   </nav>
  )
}
