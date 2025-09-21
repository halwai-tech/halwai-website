// components/Banner.js
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-[60vh] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/halwai-images/image2.jpg"
        alt="Banner"
        fill
        priority
        className="object-cover brightness-75"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered Content */}
      <div className="absolute text-center px-4 md:px-0 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-white drop-shadow-lg mb-4">
          Where House Parties Meet Elegance
        </h1>
        <p className="text-white text-md sm:text-lg md:text-xl drop-shadow-md">
          Celebrate with authentic halwais delivering exquisite flavors for every occasion.
        </p>
      </div>
    </div>
  );
};

export default Banner;
