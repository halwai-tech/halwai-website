import React from 'react';

const AboutDiningExperiences = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto text-black h-full px-4 py-10">
       
        <div className="grid grid-cols-[55%_40%] gap-[5%] items-center h-full mb-16">
          {/* Left Content */}
          <div>
            <h4 className="text-lg font-roboto-slab uppercase text-[#C7702A] mb-2">
              Halwai Wedding & Party Catering
            </h4>
            <h1 className="text-4xl font-playfair leading-snug mb-4">
              Traditional Halwais & Live Counters
            </h1>
            <p className="text-lg font-roboto-slab text-gray-700 leading-relaxed mb-6">
              Make your weddings, receptions, and parties unforgettable with our
              expert Halwais. We specialize in authentic Indian sweets, snacks,
              and live food counters that bring both flavor and tradition to
              your special day. From mithai to street-style delicacies, we serve
              it fresh and festive.
            </p>
            <button className="px-6 py-3 bg-main text-white font-medium rounded-md hover:bg-[#a6501d] transition">
              Book Now for Our Services
            </button>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/halwai-images/image9.jpg"
              alt="Halwai Wedding Catering"
              className=" shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

    
      </div>
    </section>
  );
};

export default AboutDiningExperiences;
