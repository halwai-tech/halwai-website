import React from 'react';
import Link from 'next/link';
import { CircleUserRound } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="h-[75px] bg-main text-white font-playfair sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl xl:px-10 2xl:px-0 h-full mx-auto flex justify-between items-center">
        <h1 className="text-2xl">
          <Link href="/">HALWAI</Link>
        </h1>
        <ul className="flex gap-4 items-center text-xl">
          {/* <li><Link href="/">Home</Link></li> */}
          <li><Link href="/about">About</Link></li>
          <li><Link href="/service">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <ul className="flex gap-2">
          <li className="cursor-pointer">
            <Link href="/login">
              <CircleUserRound className="w-8 h-8" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
