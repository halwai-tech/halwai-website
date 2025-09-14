// components/contact/PartnerBenefits.tsx
const benefits = [
  {
    title: "Verified Customers",
    desc: `Connect with genuine clients who are serious about
booking quality catering services for their important
celebrations and events.`,
  },
  {
    title: "Business Growth",
    desc: `Expand your reach beyond local networks and access
customers across multiple cities looking for authentic
halwai services.
`,
  },
  {
    title: "Platform Support",
    desc: `Get dedicated support for profile optimisation,
customer communication, and dispute resolution to
ensure smooth operations.
`,
  },
  {
    title: "Secure Payments",
    desc: `Receive guaranteed payments through our secure
system with transparent pricing and no hidden fees
for partner halwais.`,
  },
];

export default function PartnerBenefits() {
  return (
    <section className="py-16 bg-mainwhite  relative overflow-hidden">
      <div className="max-w-5xl mx-auto xl:px-10 2xl:px-0">
        <h2 className="text-3xl font-bold font-roboto-slab  text-maindarkgray mb-12">
          Partner Benefits
        </h2>
        <div className="grid md:grid-cols-2 gap-8  mx-auto">
          {benefits.map((b, i) => (
            <div key={i} className=" p-6  rounded-2xl ">
              <h3 className="text-2xl font-roboto-slab font-semibold text-maindarkgray mb-2">
                {b.title}
              </h3>
              <p className="text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
