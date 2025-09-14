// components/contact/HeroSection.tsx
export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center text-white px-6"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/contact2/hero-background.jpg')", // Replace with your image
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect!</h1>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Questions, feedback, or partnership inquiries? We're just a message
          away. At <span className="font-semibold">Halwaiwala.in</span>, we make
          it simple to connect with trusted halwais and chefs for your special
          celebrations.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#contact-form"
            className="bg-white text-red-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
          >
            Get Started
          </a>
          <a
            href="#how-it-works"
            className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-red-600 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
