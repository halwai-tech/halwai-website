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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold font-roboto-slab text-main ">Serving In</h2>
        <p className="text-gray-500 font-roboto-slab mt-2">20 cities and counting</p>

        {/* Cities Grid */}
        <div className="mt-10 grid grid-cols-2 font-roboto-slab sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {cities.map((city, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <Image
                src={city.icon}
                alt={city.name}
                width={60}
                height={60}
                className="mb-3 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-gray-700 font-medium">{city.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServingCities;