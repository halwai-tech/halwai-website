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
      className="relative py-16 px-6 rounded-2xl bg-cover bg-center flex justify-center items-center h-screen text-white"
      style={{ backgroundImage: "url('/images/contact2/stats-section-bg.jpg')" }} 
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 rounded-2xl"></div>

      {/* Content */}
      <div className="relative max-w-6xl z-10 mx-auto">
        <h2 className="text-5xl font-bold font-roboto-slab text-maindarkgray  mb-5">
          Connect Across India
        </h2 >
        <h4 className="text-2xl font-bold font-roboto-slab text-mainlightgray  mb-12">We're building India's largest network of trusted halwais and satisfied customers. Join thousands who celebrate without worry.
</h4>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-5xl font-roboto-slab text-maindarkgray font-bold mb-2">{s.value}</p>
              <p className="text-2xl font-roboto-slab text-mainlightgray">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
