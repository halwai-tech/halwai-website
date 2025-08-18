import React from "react";
import chefImage from "@/assets/chef-image.jpg"; // Replace with actual path
import dishImage from "@/assets/dish.png"; // Replace with actual path

const HomepageHero = () => {
  return (
    <section className="relative bg-[#f6e8df] overflow-hidden">
      <div className="max-w-7xl mx-auto  xl:px-10 2xl:px-0 py-16 flex justify-between items-center relative z-10">
        {/* Left Section */}
        <div>
          <p className="text-lg text-[#C7702A] font-roboto-slab  uppercase tracking-wide mb-4">
            Gulliver Private Chef
          </p>
          <h1 className="text-4xl md:text-5xl font-playfair  text-black leading-snug">
            Indulge in the Finest 
          </h1>
          {/* inner container */}
          <div className="flex justify-start items-center ">
              {/* Dish Image */}
          <div className="mt-8 w-44 ">
            <img
              src="/images/homepage/hero-dish.png"
              alt="Dish"
              className="rounded-full object-cover shadow-lg translate-x-[-40px]"
            />
          </div>
            <div>
            <h1 className="text-4xl md:text-5xl font-playfair text-black leading-snug">Culinary Delights</h1>
          <p className="mt-6 text-gray-600 w-[500px]  leading-relaxed font-roboto-slab text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis unde omnis.
          </p>
            </div>

          </div>
         
        
        </div>

        {/* Right Section - Chef Image */}
        <div className=" ">
       
    <div
  style={{ backgroundImage: 'url("/images/homepage/hero-chef.jpeg")' }}
  className="h-[540px] w-[540px]  bg-cover bg-center bg-no-repeat shadow-lg"
>

</div>
        </div>
      </div>

      {/* Decorative Leaf Illustration */}
      <div className="absolute top-0 right-[50%] -translate-x-1/2 opacity-20 z-0 hidden md:block">
        <svg
          width="150"
          height="150"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-300"
        >
        
        </svg>
      </div>
    </section>
  );
};

export default HomepageHero;
