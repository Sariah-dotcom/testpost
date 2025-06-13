import React from 'react'
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import Locations from '../components/Locations'
import Promotions from '../components/Promotions'

export default function Home() {
  return (
    <div className='flex flex-col gap-30 md:gap-50'>
      <Hero />
      <section className='flex justify-center px-5 md:px-10 lg:px-0'>
        <div className='lg:w-[70%] flex flex-col gap-5 lg:gap-20'>
          <h2 className='section-heading text-4xl md:text-5xl lg:text-6xl text-center lg:text-left'>About <span className='italic'>Us</span></h2>
          <p className='text-sm text-center lg:text-left '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui quam, ultrices non venenatis nec, pretium tristique justo. Morbi ac dignissim lacus. Pellentesque at commodo tellus, eget tempus dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ultrices pellentesque elit eu consectetur. In vel velit mauris. Cras ac nisi at justo malesuada volutpat id ut diam. Mauris feugiat, orci sed tristique hendrerit, ex sem ultrices tellus</p>
        </div>

      </section>
      <ServicesSection />
      <Locations />
      <Promotions />
    </div>
  )
}
