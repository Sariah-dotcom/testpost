import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='relative pt-15 pb-2 bg-[#020F37] w-full text-white flex flex-col lg:items-center gap-5 lg:h-[60vh] lg:gap-20 lg:justify-center'>

      <div className='lg:w-[70%] pt-10 flex flex-col gap-20 lg:flex-row lg:items-center'>
        <div className="flex flex-col items-center text-xs">
          <img className='h-15 lg:h-25' src="\logo-white.png" alt="SVG Post logo" />
          <p className='opacity-50 mt-3 lg:mt-8 mb-2'>St. Vincent & the Grenadines Postal Corporation</p>
          <p className='opacity-50'>Ground Floor, Ministerial Building, Kingstown</p>
        </div>

        <div className='px-5 flex flex-col gap-10 w-full lg:flex-row lg:justify-between mb-20'>
          <div className="footer-link-group">
            <h4 className='uppercase font-semibold text-sm mb-5'>Services</h4>
            <ul className='flex flex-col gap-2 text-sm'>
              <Link to="\">Utility Bill Payment</Link>
              <Link to="\">Moneygram</Link>
              <Link to="\">EMS</Link>
              <Link to="\">Registered Mail</Link>
              <Link to="\">US Mailbox</Link>
            </ul>
          </div>

          <div className="footer-link-group">
            <h4 className='uppercase font-semibold text-sm mb-5'>Quick Links</h4>
            <ul className='flex flex-col gap-2 text-sm'>
              <Link to="\">Letter Postage Rates</Link>
              <Link to="\">Private Post Box Form</Link>
              <Link to="\">US Mailbox Form</Link>
            </ul>
          </div>

          <div className="footer-link-group">
            <h4 className='uppercase font-semibold text-sm mb-5'>Contact</h4>
            <div className='text-sm'>
              <p><span className='font-semibold'>Phone: </span>+1(784) 457-1744</p>
              <p><span className='font-semibold'>Email: </span>svgpostalcorp@vincysurf.com</p>
            </div>
          </div>
        </div>
      </div>
      
      <p className='absolute bottom-4 text-xs text-center w-full opacity-50'>SVG Postal Corporation © {year}</p>

    </footer>
  )
}
