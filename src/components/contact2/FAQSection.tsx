// components/contact/FAQSection.tsx
const faqs = [
  {
    q: "Have questions?",
    a: "Check our comprehensive FAQ section for instant answers about booking process, pricing, cancellations, and partnership requirements.",
    highlight: true,
  },
  {
    q: "How do I book a halwai?",
    a: "Simple 3-step process: Tell us your requirements, review matched profiles, and confirm booking.",
  },
  {
    q: "What's the typical cost?",
    a: "Prices vary by menu, guest count, and location. Get personalised quotes from multiple halwais.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 relative overflow-hidden bg-mainpeachpuff">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold font-roboto-slab text-maindarkgray mb-12">
          Quick Answers
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left big card */}
          <div className="   flex flex-col justify-between">
            <div className="bg-white p-6 rounded-2xl shadow mb-10">
              <h3 className="  text-2xl font-roboto-slab text-maindarkgray font-semibold mb-2">
                {faqs[0].q}
              </h3>
              <p className="text-mainlightgray font-roboto-slab mb-4">
                {faqs[0].a}
              </p>
            </div>
             <button className="mt-auto w-[200px] inline-block px-6 py-3 border border-maindarkgray rounded-lg text-maindarkgray font-semibold hover:bg-maindarkgray hover:text-white transition">
              View FAQs
            </button>
            
          </div>
         

          {/* Right column stacked FAQs */}
          <div className="flex flex-col gap-8">
            {faqs.slice(1).map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow">
                <h3 className="text-xl font-roboto-slab text-maindarkgray font-semibold mb-2">
                  {f.q}
                </h3>
                <p className="text-mainlightgray font-roboto-slab">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
