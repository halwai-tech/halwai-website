import React from "react";
import Image from "next/image";

const cities = [
  { name: "Delhi", icon: "/images/about/Delhi.jpeg" },
  { name: "Gurugram", icon: "/images/about/Gurugram.jpeg" },
  { name: "Noida", icon: "/images/about/Noida.jpeg" },
  { name: "Faridabad", icon: "/images/about/Faridabad.jpeg" },
  { name: "Ghaziabad", icon: "/images/about/Ghaziabad.jpeg" },
  { name: "Greater Noida", icon: "/images/about/Greater Noida.jpeg" },
  { name: "Bengaluru", icon: "/images/about/Bengaluru.jpeg" },
  { name: "Hyderabad", icon: "/images/about/Hyderabad.jpeg" },
  { name: "Mumbai", icon: "/images/about/Mumbai.jpeg" },
  { name: "Navi Mumbai", icon: "/images/about/Navi Mumbai.jpeg" },
  { name: "Thane", icon: "/images/about/Thane.jpeg" },
  { name: "Pune", icon: "/images/about/Pune.jpeg" },
  { name: "Kolkata", icon: "/images/about/Kolkata.jpeg" },
  { name: "Jaipur", icon: "/images/about/Jaipur.jpeg" },
  { name: "Ahmedabad", icon: "/images/about/Ahmedabad.jpeg" },
  { name: "Vadodara", icon: "/images/about/Vadodara.jpeg" },
  { name: "Surat", icon: "/images/about/Surat.jpeg" },
  { name: "Chandigarh", icon: "/images/about/Chandigarh.jpeg" },
  { name: "Chennai", icon: "/images/about/Chennai.jpeg" },
  { name: "Indore", icon: "/images/about/Indore.jpeg" },
  { name: "Panaji", icon: "/images/about/Panaji.jpeg" },
  { name: "Lucknow", icon: "/images/about/Lucknow.jpeg" },
  { name: "Other City", icon: "/images/about/other City.png" },
];

const ServingCities = () => {
  return (
    <section className="bg-mainwhite">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold font-roboto-slab text-maindarkgray">
          Serving In
        </h2>
        <p className="text-gray-500 font-roboto-slab mt-2 text-lg">
          20+ cities and counting
        </p>

        {/* Cities Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
          {cities.map((city, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="w-20 h-20 mb-3 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                <Image
                  src={city.icon}
                  alt={city.name}
                  width={60}
                  height={60}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-gray-800 font-semibold">{city.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServingCities;
