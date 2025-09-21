// components/contact/Testimonials.tsx
const testimonials = [
  {
    text: "Halwaiwala.in made our wedding catering stress-free. The halwai was professional, food was amazing, and guests couldn't stop praising the authentic flavours!",
    author: "Pruva & Ravi, Mumbai",
  },
  {
    text: "As a halwai, joining this platform doubled my bookings within 3 months. The customer verification system ensures I work with serious clients only.",
    author: "Chef Ramesh, Delhi",
  },
];

export default function Testimonials() {
  return (
    <section
      className="relative py-20 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/contact2/testimonial-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold font-roboto-slab text-white mb-12">
          Our Success Stories
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <p className="italic text-gray-800 mb-4 md:text-lg">“{t.text}”</p>
              <p className="font-semibold text-red-600 md:text-base">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
