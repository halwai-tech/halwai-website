// components/contact/CallToAction.tsx
export default function CallToAction() {
  return (
    <section className="relative bg-mainpeachpuff">
      <div className="max-w-6xl mx-auto px-4 text-center md:text-left">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-maindarkgray font-roboto-slab mb-4">
            Celebrate Without Worry
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold font-roboto-slab text-maindarkgray mb-6">
            Book Verified Halwais for Your Next Event
          </h3>
          <p className="text-gray-700 font-roboto-slab md:text-lg">
            Whether it's a grand wedding, intimate birthday, festival celebration, or
            corporate event, we connect you with the perfect halwai who understands
            your taste and tradition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side (Image) */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/contact2/callToAction.jpg"
              alt="Family Celebration"
              className="rounded-3xl shadow-xl w-full max-w-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right side (Text + Buttons) */}
          <div className="mt-8 md:mt-0">
            <p className="text-gray-700 text-lg md:text-xl font-roboto-slab mb-8">
              Ready to make your celebration memorable? Our verified network of
              professional halwais is waiting to serve your guests authentic, delicious
              food that creates lasting memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact-form"
                className="bg-red-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-red-700 transition"
              >
                Book a Halwai Now
              </a>
              <a
                href="#"
                className="border border-red-600 text-red-600 px-6 py-3 rounded-2xl hover:bg-red-50 transition"
              >
                Browse Halwais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
