import React from "react";

const ServiceHeader = () => {
  return (
    <section
      className="relative h-[80vh] flex  items-center bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: "url('/halwai-images/image2.jpg')" }} 
    >
      {/* Dark overlay */}
      <div className="absolute inset-0  opacity-30 z-0" />

      {/* <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="w-full text-center">
          <h1 className="text-6xl font-playfair text-white">Our Service</h1>
        </div>
      </div> */}
    </section>
  );
};

export default ServiceHeader;
