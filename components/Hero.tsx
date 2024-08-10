"use client";
import React from 'react'
import { Button } from './ui/button'
import { SparklesCore } from "@/components/ui/sparkles";

const Hero = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center mx-auto gap-6 min-h-screen px-4 md:px-24 text-center -z-50'>
    <div className="w-full absolute inset-0 min-h-screen pointer-events-none">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.9}
        maxSize={1.4}
        particleDensity={70}
        className="w-full h-full"
        particleColor="#efde74"
      />
      </div>
      <h1 className='text-5xl md:text-7xl font-bold'>Bringing the Outdoors to You</h1>
      <p className='font-mono  text-xl max-w-3xl text-secondary'>Discover our premier camp rental options nestled in breathtaking landscapes. Book your earthly escape today.</p>
      <Button variant={"destructive"} className='z-50'>Contact Us</Button>
    </div>
    </>
  )
}

export default Hero