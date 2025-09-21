"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CircleUserRound, Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`w-full transition-all duration-300 z-50 ${
        scrolled
          ? "fixed top-0 left-0 backdrop-blur-sm bg-white/90 shadow-md"
          : "relative bg-white"
      }`}
    >
      <div className="flex justify-between items-center h-[70px] px-6 md:px-10 lg:px-20">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold font-headings text-gray-900 hover:text-[#f5a623] transition-colors z-50">
          <Link href="/">HALWAI WALA</Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-body text-base md:text-lg text-gray-900">
          {["/", "/about", "/service", "/contact"].map((href, i) => {
            const name = ["Home", "About", "Services", "Contact"][i];
            return (
              <li key={i}>
                <Link
                  href={href}
                  className="hover:text-[#f5a623] transition-colors"
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Phone & Login */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+919643986161"
            className="flex items-center gap-2 text-gray-900 hover:text-[#f5a623] transition-colors"
          >
            <Phone className="w-5 h-5" /> +91 96439 86161
          </a>
          <Link href="/login">
            <button className="flex items-center gap-2 bg-[#f5a623] text-white px-4 py-2 rounded-md font-medium hover:bg-[#fbbf24] transition-colors">
              <CircleUserRound className="w-5 h-5" /> Login
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-900 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[70px] left-0 w-full h-screen bg-white z-40 transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col gap-6 p-6 font-body text-base text-gray-900">
          {["/", "/about", "/service", "/contact"].map((href, i) => {
            const name = ["Home", "About", "Services", "Contact"][i];
            return (
              <li key={i}>
                <Link
                  href={href}
                  onClick={handleLinkClick}
                  className="hover:text-[#f5a623] transition-colors block text-center w-full"
                >
                  {name}
                </Link>
              </li>
            );
          })}
          <li className="flex justify-center items-center gap-2 hover:text-[#f5a623] transition-colors">
            <Phone className="w-5 h-5" /> <a href="tel:+919643986161">+91 96439 86161</a>
          </li>
          <li>
            <Link href="/login" onClick={handleLinkClick}>
              <button className="flex items-center gap-2 w-full justify-center bg-[#f5a623] text-white px-4 py-2 rounded-md font-medium hover:bg-[#fbbf24] transition-colors">
                <CircleUserRound className="w-5 h-5" /> Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
