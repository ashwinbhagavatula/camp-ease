import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='flex items-center p-2 md:px-8 justify-between'>
        <h2 className='font-mono text-2xl text-accent flex gap-4 items-center'>
            <img
            src="/bonfire.png"
            width={30}
            height={30}
            alt="Instagram"
            />
            <span className='hidden md:block'>Camp Ease</span>
            
        
        </h2>
        <div className='flex gap-6  font-mono '>
            <Link href={"/"} className='hover:text-accent text-primary duration-500'>Camp Sites</Link>
            <Link href={"/"} className='hover:text-accent text-primary duration-500'>About</Link>
            <Link href={"/"} className='hover:text-accent text-primary duration-500'>Contact</Link>
        </div>
    </div>
  )
}

export default Nav