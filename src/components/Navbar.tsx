import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='h-[75px]  bg-[#1E0202] text-white font-playfair '>
        <div className='max-w-7xl xl:px-10 2xl:px-0 h-full mx-auto flex justify-between items-center '>
            <h1 className='text-2xl'>HALWAI</h1>
            <ul className='flex gap-4  items-center text-xl'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/service">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
            <ul className='flex gap-2'>
              
               <li>Login</li>
            </ul>
        </div>

    </nav>
  )
}

export default Navbar;