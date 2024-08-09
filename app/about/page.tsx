import { Button } from '@/components/ui/button'
import React from 'react'

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-background text-primary">
      <div className="w-full">
        <div className='flex flex-col md:flex-row justify-center items-center mx-auto gap-10 min-h-screen px-4 md:px-24 '>
            <div className='flex flex-col gap-6 max-w-5xl'>
                <h1 className='text-4xl md:text-7xl font-bold'>Explore the Great Outdoors without hassle</h1>
                <p className='font-mono  text-lg md:text-xl  max-w-3xl text-secondary'>At Camp Ease, we're on a mission to make camping more accessible and enjoyable for everyone. Founded by two brothers with a deep passion for the outdoors, we're here to equip you with the gear and knowledge you need to explore the great outdoors.</p>
            </div>
            <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Campsite"
                className="object-cover aspect-[3/2] rounded-lg"
            />
        </div>
      </div>
      <div className="bg-foreground h-fit md:min-h-screen w-full flex flex-col justify-evenly items-center gap-10">
        <div className="min-h-screen flex flex-col md:flex-row justify-evenly items-center px-4 md:px-12 gap-10 my-24 md:my-0">
            <img
            src="/placeholder.svg"
            width={600}
            height={400}
            alt="Campsite"
            className="object-cover aspect-[3/2] rounded-lg flex-1"
            />
            <div className=" flex flex-col gap-6 text-center md:text-left ">
                <h2 className="text-3xl md:text-5xl font-bold font-sans">Two Brothers, One Vision: The Heart Behind <span className='text-accent'>Camp Ease</span></h2>
                <p className="font-mono text-secondary text-lg md:text-xl ">We’re not just business partners—we’re brothers with a shared passion for the great outdoors. Camp Ease was born from our childhood adventures, our bond, and a simple mission: to help others create unforgettable memories in nature. Our motto is more than just words; it’s a reflection of our journey and our commitment to making outdoor experiences accessible, fun, and fulfilling for everyone.
                </p>
                
                <Button variant={"outline"} className="w-28 flex mx-auto md:mx-0">Know More</Button>
            </div>
        </div>
      </div>

      <div className="bg-foreground h-fit md:min-h-screen w-full flex flex-col justify-evenly items-center gap-10">
        <div className="min-h-screen flex flex-col md:flex-row justify-evenly items-center px-4 md:px-12 gap-10 my-24 md:my-0">
            <div className=" flex flex-col gap-6 text-center md:text-left ">
                <h2 className="text-3xl md:text-5xl font-bold font-sans">Our Passion for the Outdoors</h2>
                <p className="font-mono text-secondary text-lg md:text-xl ">
                    At the heart of Camp Pal is a deep love for the great outdoors. We believe that spending time in nature is essential for our physical and mental well-being, and we're passionate about making it easier for everyone to experience the beauty and serenity of the outdoors.
                    <br/>
                    <br/>
                    Whether you're a seasoned camper or a first-time adventurer, our team is here to guide you every step of the way. We're committed to providing top-notch gear, expert advice, and unforgettable experiences that will leave you feeling refreshed, inspired, and connected to the natural world.
                </p>   
            </div>
            <img
            src="/placeholder.svg"
            width={600}
            height={400}
            alt="Campsite"
            className="object-cover aspect-[3/2] rounded-lg flex-1"
            />
        </div>
      </div>
    </div>
  )
}

export default Page;