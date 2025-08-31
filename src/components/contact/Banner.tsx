// app/components/ContactBanner.jsx
import React from "react";
import Image from "next/image";


const Banner = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src="/images/contact/cont.jpg" // <-- replace with your banner image
        alt="Contact Banner"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold">We’d love to hear from you.</h1>
      </div>

      {/* Scroll for more */}
      <div className="absolute bottom-6 inset-x-0 text-center text-white text-sm">
        scroll for more
        <div className="animate-bounce mt-2">↓</div>
      </div>

      
      {/* <button className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded shadow-lg">
        Book Now
      </button> */}
    </section>
  );
};

export default Banner;
