import React, {useRef} from 'react';
import Card from './Card';
import PrimaryButton from './PrimaryButton'
import { FaMoneyBills, FaMoneyBillTransfer } from "react-icons/fa6";
import { BsPostageHeartFill } from "react-icons/bs";
import { GiPostStamp } from "react-icons/gi";
import { RiMailSendFill } from "react-icons/ri";
import { PiMailboxFill, PiLockersFill } from "react-icons/pi";
import { FaMailBulk } from "react-icons/fa";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function ServicesSection() {
  const servicesRef = useRef();

  useGSAP(()=>{
    gsap.fromTo(
      servicesRef.current.querySelectorAll('.services-content'),
      {
        opacity: 0,
        y:50,
      },
      {
        opacity: 1,
        y:0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3",
        scrollTrigger: {
          trigger: '#services',
          start: "top 60%"
        }

      }
    )
  })


  return (
    <section id='services' className="flex flex-col w-full pl-5 " ref={servicesRef}>
     <div className='flex items-center justify-center w-full'>
        <div className=''>
        <h2 className='section-heading text-4xl md:text-5xl'>Our <span className='italic'> Services</span></h2>
        
        <PrimaryButton
            btnText= "View All"
            link="/"
        />
      </div>
     </div>

      <div className="services-content mt-3 lg:gap-5 card-container py-10 flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 lg:flex-col lg:items-center">
       <div className="flex gap-5 lg:flex lg:w-full lg:gap-30 lg:justify-center">
          <div className="snap-start shrink-0 w-64">
            <Card 
              icon={<FaMoneyBills />}
              title="Utility Bill Payments"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
          
          <div className="snap-start shrink-0 w-64">
            <Card 
              icon={<RiMailSendFill />}
              title="Express Mail Service"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>

          <div className="snap-start shrink-0 w-64">
            <Card 
              icon={<FaMailBulk />}
              title="Registration"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>

          {/* <div className="snap-start shrink-0 w-64">
            <Card 
              icon={<PiMailboxFill />}
              title="US Mailbox Service"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div> */}
       </div>

        <div className="flex gap-5 lg:flex lg:w-full lg:gap-30 lg:justify-center">
          <div className="snap-start shrink-0 w-64">
            <Card 
              icon={<PiLockersFill />}
              title="Postbox Rental"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>

          <div className="snap-start shrink-0 w-64">
            <Card 
              icon={<FaMoneyBillTransfer />}
              title="MoneyGram"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>

          <div className="snap-start shrink-0 w-64">
            <Card 
              icon={<GiPostStamp />}
              title="Stamp Sales"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>

          {/* <div className="snap-start shrink-0 w-64">
            <Card 
              icon={<BsPostageHeartFill />}
              title="Philately"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}

