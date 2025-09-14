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
      className="relative py-16 px-6 bg-cover bg-center h-screen flex justify-center items-center"
      style={{ backgroundImage: "url('/images/contact2/testimonial-bg.jpg')" }} 
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold font-roboto-slab   text-white mb-12">
          Our Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg"
            >
              <p className="italic text-gray-800 mb-4">“{t.text}”</p>
              <p className="font-semibold text-red-600">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
