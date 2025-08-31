import React from "react";
import Banner from "@/components/contact/Banner";

const Contact = () => {
  return (
    <>
    <Banner/>
    
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Heading */}
      <h2 className="text-3xl font-bold font-playfair text-center mb-12 text-gray-900">
        Contact Us
      </h2>

      {/* Contact Info */}
      <div className="space-y-4 text-gray-700 font-roboto-slab leading-relaxed text-center md:text-left">
        <p>
          If you want to book a service, call at{" "}
          <a
            href="tel:+919004044234"
            className="text-blue-600 hover:underline"
          >
            +91-9004-044-234
          </a>{" "}
          or directly book from{" "}
          <a
            href="https://coox.in"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>

        <p>
          If you have booked already and need help regarding it, chat on{" "}
          <a
            href="https://coox.in/support"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            coox.in/support
          </a>
          .
        </p>

        <p>
          If you are a cook / chef / bartender / waiter / cleaner / vendor /
          someone from the hospitality industry, you may call at{" "}
          <a
            href="tel:+919958597360"
            className="text-blue-600 hover:underline"
          >
            +91-99-5859-7360
          </a>
          .
        </p>

        <p>
          For complaints or grievances, mail us at{" "}
          <a
            href="mailto:support@coox.in"
            className="text-blue-600 hover:underline"
          >
            support@coox.in
          </a>
        </p>

        <p>
          For other general queries, mail us at{" "}
          <a
            href="mailto:hello@coox.in"
            className="text-blue-600 hover:underline"
          >
            hello@coox.in
          </a>
        </p>

        <p>
          For career and job-related matters, mail us at{" "}
          <a
            href="mailto:hr@coox.in"
            className="text-blue-600 hover:underline"
          >
            hr@coox.in
          </a>
        </p>
        <div className="mt-8">
          <h3 className="text-xl font-semibold font-playfair text-gray-900">Corporate Office</h3>
          <p className="mt-2 mb-10 font-roboto-slab">
            HALWAI Online Private Limited <br />
            WeWork Berger Delhi One C-001/A2, Sector 16B, Gautam Buddha Nagar, Noida, Uttar Pradesh-201301
          </p>
        </div>

        </div>

      {/* Map with Location Card */}
      <div className="relative w-full h-[400px] rounded-lg shadow-md overflow-hidden">
        {/* Floating Address Card */}
        <div className="absolute top-2 left-2 bg-white shadow-lg h-auto  rounded-lg p-4 max-w-xs z-10">
          <h3 className="text-xs font-semibold text-gray-900">
            Corporate Office
          </h3>
          <p className="mt-2 text-xs text-gray-700 leading-relaxed">
            Halwai <br />
            WeWork Berger Delhi One <br />
            C-001/A2, Sector 16B, Gautam Buddha Nagar, <br />
            Noida, Uttar Pradesh - 201301
          </p>
          <p className="mt-2 text-xs text-gray-600">⭐ 4.5 (556 reviews)</p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=WeWork+Berger+Delhi+One+Noida"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-primary hover:underline text-xs font-medium"
          >
            Get Directions →
          </a>
        </div>

        {/* Google Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.040833210668!2d77.36231937549845!3d28.62889617567078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a9cbf051a1%3A0x2a1f8e6a61f97f2f!2sWeWork%20Berger%20Delhi%20One%2C%20Sector%2016B%2C%20Noida!5e0!3m2!1sen!2sin!4v1692876200000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="lazy"
          className="border-0"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
    </>
  );
};

export default Contact;
