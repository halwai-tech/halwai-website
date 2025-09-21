// components/contact/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contact2/hero-background.jpg')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-4 sm:px-6 md:px-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug mb-3 sm:mb-4">
          Delicious Moments, Delivered
        </h1>
        <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-5">
          Book top halwais & chefs for your events — sweet, savory & memorable.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a
            href="#contact-form"
            className="bg-red-600 text-white font-semibold px-5 py-2.5 rounded-lg shadow-lg hover:bg-red-500 transition"
          >
            Contact Now
          </a>
          <a
            href="#how-it-works"
            className="border border-white text-white px-5 py-2.5 rounded-lg hover:bg-white hover:text-red-600 transition shadow"
          >
            How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
