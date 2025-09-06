// components/Banner.js
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-[90vh] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/about/ban.webp"
        alt="Banner"
        fill
        priority
        className="brightness-50 object-cover"
      />

      {/* Centered Text */}
      <div className="absolute text-center">
        <h1 className="text-3xl md:text-5xl font-bold font-playfair text-white drop-shadow-lg">
          Where House Parties Meet Elegance.
        </h1>
      </div>
    </div>
  );
};

export default Banner;
