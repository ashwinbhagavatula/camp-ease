import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center mx-auto gap-6 min-h-screen px-4 md:px-24 text-center'>
        <h1 className='text-5xl md:text-7xl font-bold'>Bringing the Outdoors to You</h1>
        <p className='font-mono  text-lg max-w-3xl text-secondary'>Discover our premier camp rental options nestled in breathtaking landscapes. Book your earthly escape today.</p>
        <Button variant={"destructive"} >Contact Us</Button>
    </div>
    </>
  )
}

export default Hero