import React from 'react'
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import Locations from '../components/Locations'

export default function Home() {
  return (
    <div className='flex flex-col gap-30 md:gap-50'>
      <Hero />
      <ServicesSection />
      <Locations />
    </div>
  )
}
