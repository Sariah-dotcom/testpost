import React from 'react'
import Accordion from './Accordion'

export default function Locations() {
  return (
    <section className='flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-center px-5'>
      <div className='lg:w-1/2 flex flex-col gap-5'>
        <h2 className='section-heading text-4xl md:text-5xl'>Multiple Locations <br /> <span className='italic'>Island-wide</span></h2>
        <p className='text-sm md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos soluta magnam odio voluptatum accusamus tenetur dignissimos.</p>
        
        <div className='flex flex-col gap-8 py-5 lg:w-[80%]'>
            <Accordion 
              heading= "Windward" 
              content= {<ul>
                <li>Calliaqua Post Office</li>
                <li>Mesopotamia Post Office</li>
                <li>Georgetown Revenue Office</li>
              </ul>}
            />

            <Accordion 
              heading= "Leeward" 
              content= {<ul>
                <li>Layou Post Office</li>
                <li>Barrouallie Revenue Office</li>
                <li>Chateaubelair Post Office</li>
              </ul>}
            />

            <Accordion 
              heading= "Grenadines" 
              content= {<ul>
                <li>Bequia Revenue Office</li>
                <li>Union Island Revenue Office</li>
              </ul>}
            />
          </div>
      </div>

      <div className='lg:w-1/3 flex justify-center'>
        <img className='lg:h-[35rem] h-[20rem]' src="\map.png" alt="map" />
      </div>
    </section>
  )
}
