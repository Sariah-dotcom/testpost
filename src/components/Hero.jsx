import React, { useRef } from 'react';
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const heroContent = useRef();
  const heroBtns = useRef();
  const underline = useRef();

  useGSAP(() => {
    const path = underline.current.querySelector('path');
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      opacity: 0
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      opacity: 1,
      duration: 1,
      ease: "power3",
      delay: 2
    });

    gsap.fromTo(
        heroContent.current.querySelectorAll('.hero-content'),
        {
            y: 80,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.5,
            ease: "power3"
        }
    )

    gsap.fromTo(
        heroBtns.current.querySelectorAll('.hero-btn'),
        {
            y: 80,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            delay: 1.8,
            duration: 1,
            stagger: 0.5,
            ease: "power3"
        }
    )

  }, []);

  return (
    <section id='hero' className='relative flex flex-col gap-10 py-35 h-[80vh] lg:h-[95vh] items-center'>
        <div className="hero-text flex flex-col items-center" ref={heroContent}>
            <h2 className="secondary-heading hero-content text-xs mb-3 md:mb-5 text-center md:text-sm ">Mail Made Simple</h2>
            <h1 className='hero-content text-5xl text-center md:text-7xl lg:text-8xl'>Send It, Post It <br />We 
                <span className='italic relative inline-block mr-2 ml-2 md:mr-4 md:ml-4'>
                    Deliver
                    <svg
                        className="absolute -z-1 -bottom-3 lg:-bottom-5 left-0 h-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 310 40"
                        ref={underline}
                        >
                        <path
                            d="M4.99805 20.9998C65.6267 17.4649 126.268 13.845 187.208 12.8887C226.483 12.2723 265.751 13.2796 304.998 13.9998"
                            fill="none"
                            stroke="#A0C2F4"
                            strokeWidth="7"
                            strokeLinecap="round"
                        />
                    </svg>
                </span> 
                It
            </h1>
            <p className='hero-content text-xs md:text-sm text-center w-[70%] mt-8 lg:mt-15'> Blanditiis reiciendis vitae et ex id officia sapiente maxime expedita at ullam tempore.</p>
        </div>

        <div className='flex gap-3 md:gap-5 lg:gap-8' ref={heroBtns}>
            <div className="hero-btn">
                 <PrimaryButton 
                btnText = "Track a Package"
                link = "/"
            />

            </div>
           
           <div className='hero-btn'>
             <SecondaryButton className="hero-btn"
                    btnText = "View all Services"
                    link = "/"
            />

           </div>
           
        </div>

        <div className='absolute w-full flex justify-center -z-1 bottom-0'>
            <img className=' opacity-30' src="/doodle.jpg" alt="doodle" />
        </div>
    </section>
  )
}
