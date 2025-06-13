import {useRef} from 'react'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef();

  useGSAP(()=>{
    gsap.fromTo(
      aboutRef.current.querySelectorAll('.about-content'),
      {
        opacity: 0,
        y:50,
      },
      {
        opacity: 1,
        y:0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3",
        scrollTrigger: {
          trigger: '#about',
          start: "top 60%"
        }

      }
    )
  })


  return (
      <section id='about' className='flex justify-center px-5 md:px-10 lg:px-0'>
        <div className='lg:w-[70%] flex flex-col gap-5 lg:gap-20' ref={aboutRef}>
          <h2 className='about-content section-heading text-4xl md:text-5xl lg:text-6xl text-center lg:text-left'>About <span className='italic'>Us</span></h2>
          <p className='about-content text-sm text-center lg:text-left '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui quam, ultrices non venenatis nec, pretium tristique justo. Morbi ac dignissim lacus. Pellentesque at commodo tellus, eget tempus dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ultrices pellentesque elit eu consectetur. In vel velit mauris. Cras ac nisi at justo malesuada volutpat id ut diam. Mauris feugiat, orci sed tristique hendrerit, ex sem ultrices tellus</p>
        </div>

      </section>
  )
}
