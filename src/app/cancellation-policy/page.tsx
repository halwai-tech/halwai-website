// app/components/CancellationPolicy.js
import React from "react";

const CancellationPolicy = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold font-playfair text-gray-900 mb-8">
        Cancellation Policy
      </h2>

      <ul className="text-left space-y-4 font-roboto-slab text-lg text-gray-700">
        <li>
          • You can put booking <span className="font-semibold">On Hold</span> /
          Change Date for{" "}
          <span className="font-bold text-green-600">FREE till 24 hours</span>{" "}
          before partner arrival time
        </li>
        <li>
          • You can put booking <span className="font-semibold">On Hold</span> /
          Change Date for{" "}
          <span className="font-bold text-red-600">₹299 within 24 hours</span> of
          partner arrival time
        </li>
        <li>
          • You can permanently cancel the booking anytime.{" "}
          <span className="font-bold">Advance amount is non-refundable</span>
        </li>
      </ul>

      {/* Sub Section */}
      <div className="mt-12 font-roboto-slab text-left">
        <h3 className="text-lg font-semibold mb-2">What is On Hold?</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>
            You can pause the booking until you decide the new date for it.
          </li>
          <li>
            Once you have put it <span className="font-semibold">On Hold</span>,
            you will get a limit of up to 6 months to decide the new date. If
            you need the date to be beyond that limit, you can buy an extension
            for just <span className="font-semibold">₹10 per day</span>.
          </li>
        </ul>
      </div>

      {/* Book Now Button */}
      <div className="flex justify-end mt-12">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md shadow-md">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default CancellationPolicy;
