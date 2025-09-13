"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { eventController } from "@/api/eventController";
import { IEventCategory } from "@/utils/typeDef";

export default function OccasionsSection() {
  const [eventsCategoryList, setEventCategoryList] = useState<IEventCategory[]>([]);

  useEffect(() => {
    async function fetchAllEvents() {
      try {
        const response = await eventController.getAllEventCategory();
        console.log("category list: ", response?.data?.data);
        setEventCategoryList(response?.data?.data);
      } catch (error) {
        console.log("Error in fetching all events: ", error);
      }
    }

    fetchAllEvents();
  }, []);

  return (
    <section className="relative py-10 font-playfair overflow-hidden bg-white px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className="flex flex-col items-start ">
          <h2 className="text-3xl font-bold text-gray-900">Special Occasions</h2>
          <p className="text-gray-600 mt-2">
            We cater to all kinds of{" "}
            <span className="text-blue-600 font-medium">occasions</span>
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {eventsCategoryList.map((category, index) => (
            <Link
              href={`/booking`} // ✅ Customize this route as needed
              key={index}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-200 bg-white block"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <div className="w-full h-full transition-transform duration-300 transform hover:scale-105">
                  <Image
                    src={category?.image}
                    alt={category.eventCategoryName}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="p-3 text-center">
                <h3 className="text-md font-medium font-roboto-slab text-gray-800">
                  {category?.eventCategoryName}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
