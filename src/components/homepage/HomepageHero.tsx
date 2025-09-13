import React from "react";

const HomepageHero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto xl:px-10 2xl:px-0 py-10 flex justify-between items-center relative z-10">
        {/* Left Section */}
        <div className="flex-1 pr-8">
          <p className="text-lg text-[#C7702A] font-roboto-slab uppercase tracking-wide mb-4">
            Halwai Wedding & Party Catering
          </p>
          <h1 className="text-2xl md:text-4xl font-playfair text-main leading-snug mb-4">
            Traditional Taste, Modern Elegance
          </h1>

          {/* Inner container */}
          <div>
            <h2 className="text-xl md:text-3xl font-playfair text-black leading-snug">
              Bringing Celebrations to Life
            </h2>
            <p className="mt-6 text-gray-600 w-[600px] leading-relaxed font-roboto-slab text-lg">
              From grand weddings to intimate parties, our expert Halwais craft
              authentic sweets, snacks, and catering services that elevate every
              occasion. Enjoy the timeless flavors of India, freshly prepared and
              beautifully served for your guests. We bring not only food but
              also a cultural experience that enhances your celebration.
            </p>
          </div>
        </div>

        {/* Right Section - Catering Image */}
        <div className="flex-shrink-0">
          <div
            style={{
              backgroundImage: 'url("/halwai-images/image6.jpg")',
            }}
            className="h-[480px] w-[540px] bg-cover bg-top bg-no-repeat shadow-lg "
          ></div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-0 right-[50%] -translate-x-1/2 opacity-20 z-0 hidden md:block">
        <svg
          width="150"
          height="150"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-300"
        ></svg>
      </div>
    </section>
  );
};

export default HomepageHero;
