import React from 'react'
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import Locations from '../components/Locations'
import Promotions from '../components/Promotions'
import About from '../components/About'

export default function Home() {
  return (
    <div className='flex flex-col gap-30 md:gap-50'>
      <Hero />
      <About />
      <ServicesSection />
      <Locations />
      <Promotions />
    </div>
  )
}
