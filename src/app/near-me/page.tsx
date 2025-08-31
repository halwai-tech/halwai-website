"use client";
import Link from "next/link";

export default function Services() {
  const services = [
    { name: "COOKS NEAR ME", slug: "cook" },
    { name: "CHEFS NEAR ME", slug: "chef" },
    { name: "BARTENDERS NEAR ME", slug: "bartender" },
    { name: "CATERERS NEAR ME", slug: "caterer" },
    { name: "WAITERS NEAR ME", slug: "waiter" },
    { name: "CLEANERS NEAR ME", slug: "cleaner" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Services Near Me</h2>
      <p className="text-lg text-gray-700 mb-16">
        Hire Trained, Verified and Background Checked Professionals via COOX
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {services.map((service, index) => (
          <Link key={index} href={`/near-me/${service.slug}`}>
            <button className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-md shadow hover:bg-yellow-500 transition">
              {service.name}
            </button>
          </Link>
        ))}
      </div>
    </section>
  );
}
