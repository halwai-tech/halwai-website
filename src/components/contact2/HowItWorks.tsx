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
      className="relative h-screen flex items-center justify-center text-white"
      id="how-it-works"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/contact2/howItWorksBG.jpg')", 
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 ">
        <h2 className="text-5xl font-roboto-slab font-bold mb-12">For Our Valued Customers
</h2>
        <div className="grid md:grid-cols-3 font-roboto-slab gap-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur-sm text-gray-800 p-6 rounded-2xl shadow-lg"
            >
              <div className="text-red-500 text-4xl font-bold mb-4">
                {s.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
