// components/contact/PartnerBenefits.tsx
const benefits = [
  {
    title: "Verified Customers",
    desc: `Connect with genuine clients who are serious about booking quality catering services for their important celebrations and events.`,
  },
  {
    title: "Business Growth",
    desc: `Expand your reach beyond local networks and access customers across multiple cities looking for authentic halwai services.`,
  },
  {
    title: "Platform Support",
    desc: `Get dedicated support for profile optimisation, customer communication, and dispute resolution to ensure smooth operations.`,
  },
  {
    title: "Secure Payments",
    desc: `Receive guaranteed payments through our secure system with transparent pricing and no hidden fees for partner halwais.`,
  },
];

export default function PartnerBenefits() {
  return (
    <section className="py-0 bg-mainwhite relative overflow-hidden">
      <div className="mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-roboto-slab text-maindarkgray mb-12 text-center md:text-left">
          Partner Benefits
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <h3 className="text-2xl font-roboto-slab font-semibold text-maindarkgray mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
