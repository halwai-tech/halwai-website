// components/contact/JoinNetwork.tsx
export default function JoinNetwork() {
  return (
    <section className="py-20  relative overflow-hidden">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h2 className="text-5xl text-maindarkgray font-roboto-slab font-bold">Are You a Halwai?</h2>
          <img
            src="/images/contact2/halwai.jpg" 
            alt="Halwai"
            className="w-full max-w-sm rounded-xl shadow"
          />
        </div>

        {/* Right side */}
        <div>
          <p className="max-w-xl font-roboto-slab mb-6 text-xl text-mainlightgray">
            Grow your catering business with verified bookings from customers across India. 
            Connect with families celebrating weddings, festivals, birthdays, and corporate events.
          </p>
          <ul className="grid gap-3 font-roboto-slab text-mainlightgray mb-6">
            <li>✅ Verified customer bookings</li>
            <li>✅ Secure payment processing</li>
            <li>✅ Marketing support included</li>
            <li>✅ Flexible scheduling options</li>
          </ul>
          <a
            href="#"
            className="inline-block bg-red-500 text-white px-6 py-3 rounded-xl shadow hover:bg-red-600 transition"
          >
            Apply Now to Partner
          </a>
        </div>
      </div>
    </section>
  );
}
