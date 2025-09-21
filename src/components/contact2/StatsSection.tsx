// components/contact/StatsSection.tsx
const stats = [
  { label: "Verified Halwais", value: "500+" },
  { label: "Happy Events", value: "2K+" },
  { label: "Customer Satisfaction", value: "95%" },
  { label: "Support Available", value: "24/7" },
];

export default function StatsSection() {
  return (
    <section
      className="relative my-20 py-20 px-6 md:px-10 rounded-3xl bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/contact2/stats-section-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-3xl"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold font-roboto-slab text-white mb-5">
          Connect Across India
        </h2>
        <h4 className="text-lg md:text-2xl font-roboto-slab text-gray-200 mb-12 max-w-3xl mx-auto">
          We're building India's largest network of trusted halwais and satisfied customers. Join thousands who celebrate without worry.
        </h4>

        <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <p className="text-4xl md:text-5xl font-bold font-roboto-slab text-gray-900 mb-2">
                {s.value}
              </p>
              <p className="text-xl md:text-2xl font-roboto-slab text-gray-700">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
