import React from "react";

const ServiceHeader = () => {
  return (
    <section
      className="relative min-h-[500px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/service/service-header.jpg')" }} // Replace with your actual image path
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="w-full text-center">
          <h1 className="text-6xl font-playfair text-white">Our Service</h1>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeader;
