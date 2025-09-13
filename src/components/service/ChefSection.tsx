import React from 'react';
import Image from 'next/image';


const ChefsSection = () => {
  return (
    <section className="bg-white py-20  ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center  justify-between ">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h5 className="text-main uppercase tracking-wide mb-2 font-roboto-slab">
            Meet Our Chefs
          </h5>
          <h2 className="text-3xl md:text-6xl  text-main font-playfair  mb-6 leading-tight">
            Expert Chefs for Every Celebration
          </h2>
          <p className="text-gray-700 text-md font-roboto-slab mb-4">
            Our team of professional chefs brings a world of flavor to your special events. Whether it’s a grand wedding, festive celebration, corporate gathering, or a private family function — we offer customized chef services designed to match your needs and guest preferences.
          </p>
          <p className="text-gray-700 text-md font-roboto-slab mb-6">
            From menu planning to live cooking and complete food setup, every dish is crafted with high-quality ingredients and culinary finesse. We specialize in creating unforgettable dining experiences that suit the style and scale of any event.
          </p>
         
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="/halwai-images/image4.jpg"
            alt="Chef at work"
            className="shadow-md"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default ChefsSection;
