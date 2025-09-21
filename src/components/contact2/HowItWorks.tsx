// components/contact/HowItWorks.tsx
const steps = [
  {
    step: "01",
    title: "Tell us your needs",
    desc: "Share your event details, preferred menu, guest count, and budget range for personalised recommendations.",
  },
  {
    step: "02",
    title: "Get matched instantly",
    desc: "Our algorithm connects you with verified halwais in your area who specialise in your event type.",
  },
  {
    step: "03",
    title: "Book with confidence",
    desc: "Review profiles, compare quotes, and book trusted professionals with our secure payment system.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="relative w-full py-24 md:py-32 flex flex-col items-center text-white overflow-hidden"
      id="how-it-works"
    >
      {/* Background Image with gradient overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/contact2/howItWorksBG.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-roboto-slab font-bold mb-12">
          For Our Valued Customers
        </h2>

        <div className="relative grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-white/95 backdrop-blur-md text-gray-800 p-6 md:p-8 rounded-3xl shadow-2xl transform transition-all duration-500 hover:-translate-y-3 hover:scale-105"
              style={{ zIndex: steps.length - i }}
            >
              <div className="text-red-500 text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                {s.step}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative floating circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-500/20 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl translate-x-32 translate-y-32"></div>
    </section>
  );
}
