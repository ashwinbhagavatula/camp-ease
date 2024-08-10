import { CampCard } from "@/components/component/camp-card";
import Hero from "@/components/Hero";
import Image from "next/image";
import {tick} from "@/utils/svg"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import hyd from "@/images/hyd.jpg"
import hyd2 from "@/images/hyd2.jpg"
import desertish from "@/images/desertish.jpg"
export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between bg-background text-primary">
      <div className="hero w-full">
      <Hero/>
      </div>
      <div className="curve w-full min-h-10 bg-foreground rounded-t-[1000px] "></div>
      <div className="bg-foreground h-fit md:min-h-screen w-full flex flex-col justify-evenly items-center gap-10">
        <h2 className="text-3xl md:text-5xl font-bold" >Crowd Favourites</h2>
        <div className=" flex flex-col md:flex-row  justify-center items-center mx-auto md:gap-10 gap-6 px-4 pb-10">
        <CampCard imageURL={hyd}/>
        <CampCard imageURL={desertish}/>
        <CampCard imageURL={hyd2}/>
        </div>
      </div>
      <div className="min-h-screen flex flex-col md:flex-row justify-evenly items-center px-4 md:px-12 gap-10 my-24 md:my-0">
        <div className=" flex flex-col gap-6 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold font-sans">Why Choose Our Escapes?</h2>
          <p className="font-mono text-secondary text-lg md:text-xl ">Our camp rental options offer a unique and unforgettable experience in some of the most breathtaking natural landscapes. 
            From cozy cabins by serene lakes to secluded campsites in the mountains, we have something for every adventurer.
          </p>
          <Button variant={"outline"} className="w-28 flex mx-auto md:mx-0">Book Now</Button>
        </div>
        <Image
        src="/campfire.jpg"
        width={600}
        height={400}
        alt="Campsite"
        className="aspect-[3/2] object-cover object-center-bottom rounded-lg"
        />
      </div>
      <ul className="font-mono flex flex-col md:flex-row gap-6 px-12 mb-24">
        <li>
          <div className="flex flex-col gap-2 bg-card p-6 rounded-xl w-96 h-[210px]">
            <h4 className="flex gap-4 font-semibold justify-center md:justify-start text-lg md:text-xl">{tick} Stunning Locations</h4>
            <p className="text-secondary">Our camps are situated in some of the most beautiful natural settings, offering unparalleled views and opportunities for exploration.</p>
          </div>
        </li>
        <li>
          <div className="flex flex-col gap-2 bg-card p-6 rounded-xl w-96 h-[210px]">
            <h4 className="flex gap-4 font-semibold justify-center md:justify-start text-lg md:text-xl">{tick} Comfortable Amenities</h4>
            <p className="text-secondary">Each of our camp sites is equipped with modern amenities to ensure a comfortable and enjoyable stay, from cozy beds to fully-stocked kitchens.</p>
          </div>
        </li>
        <li>
          <div className="flex flex-col gap-2 bg-card p-6 rounded-xl w-96 h-[210px]">
            <h4 className="flex gap-4 font-semibold justify-center md:justify-start text-lg md:text-xl">{tick} Exceptional Service</h4>
            <p className="text-secondary">Our dedicated team is committed to providing exceptional service and ensuring your camping experience is unforgettable.</p>
          </div>
        </li>
      </ul>
    </main>
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">&copy; 2024 Camp Ease. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6 items-center">
        <Link href="#" className="text-xs hover:underline underline-offset-4 text-secondary" prefetch={false}>
          Terms of Service
        </Link>
        <Link href="#" className="text-xs hover:underline underline-offset-4 text-secondary" prefetch={false}>
          Privacy
        </Link>
        <Link href="#" className="text-xs hover:underline underline-offset-4 text-secondary" prefetch={false}>
          <Image
          src="/instagram.png"
          width={30}
          height={30}
          alt="Instagram"
          />
        </Link>
        
      </nav>
    </footer>
  </>
  );
}
