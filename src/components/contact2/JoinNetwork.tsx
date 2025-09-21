// components/contact/JoinNetwork.tsx
export default function JoinNetwork() {
  return (
    <section className="py-20 relative overflow-hidden bg-gray-50">
      <div className="mx-auto grid md:grid-cols-2 gap-12 items-center px-2">
        
        {/* Left side: Image */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/images/contact2/halwai.jpg" 
            alt="Halwai"
            className="w-full max-w-sm rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right side: Heading + Text + Benefits + CTA */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Heading stays at top, original size */}
          <h2 className="text-3xl sm:text-4xl font-roboto-slab font-bold text-gray-900">
            Are You a Halwai?
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-lg font-roboto-slab leading-relaxed">
            Grow your catering business with verified bookings from customers across India. 
            Connect with families celebrating weddings, festivals, birthdays, and corporate events.
          </p>

          {/* Benefits list */}
          <ul className="grid gap-3 text-gray-600 font-roboto-slab list-inside">
            <li className="flex items-center gap-2">
              <span className="text-red-500">✅</span> Verified customer bookings
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">✅</span> Secure payment processing
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">✅</span> Marketing support included
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">✅</span> Flexible scheduling options
            </li>
          </ul>

          {/* CTA Button */}
          <a
            href="#"
            className="inline-block bg-red-500 text-white font-medium px-6 py-3 rounded-xl shadow hover:bg-red-600 transition-all text-center w-full md:w-auto"
          >
            Apply Now to Partner
          </a>
        </div>
      </div>
    </section>
  );
}
