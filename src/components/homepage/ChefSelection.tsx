"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const cookingServices = [
  {
    title: "Professional Chef",
    subtitle: "Multi Cuisine Experience",
    price: "Starts ₹ 999",
    linkText: "Professional Chefs",
    link: "/booking/professional-chef",
    image: "/images/chef-image/chef.png", // ✅ Replace with actual image path
  },
  {
    title: "Domestic Cook",
    subtitle: "Ghar Ka Khaana",
    price: "Starts ₹ 299",
    linkText: "Domestic Cooks",
    link: "/domestic-cook",
    image: "/images/chef-image/chef.png", // ✅ Replace with actual image path
  },
  {
    title: "For Monthly Basis",
    subtitle: "30 Days Guarantee",
    price: "Starts ₹ 2999",
    linkText: "For Monthly Basis",
    link: "/monthly-cook",
    image: "/images/chef-image/chef.png", // ✅ Replace with actual image path
  },
];

export default function ChefSelection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-main font-playfair">Cooking Services</h2>
          <p className="text-gray-600 mt-2 text-lg font-roboto-slab">
            Get rid of your kitchen stress
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cookingServices.map((service, index) => (
            <Link
              key={index}
              href={index==0?"/booking" :`${service.link}`}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 bg-white"
            >
              <div className="relative h-44 bg-main flex items-center justify-between p-4 pb-0">
                <div>
                  <h3 className="text-2xl font-bold font-roboto-slab text-white">
                    {service.title}
                  </h3>
                  <p className="text-white font-roboto-slab text-md">{service.subtitle}</p>
                </div>
                <div className="relative w-40 h-40">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>

              <div className="px-4 py-2">
                <p className="text-blue-700 font-medium">{service.linkText}</p>
                <p className="text-gray-600 text-sm">{service.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
