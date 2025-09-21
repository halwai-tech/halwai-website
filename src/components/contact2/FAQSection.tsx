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
      <div>
        <h2 className="text-3xl md:text-4xl font-bold font-roboto-slab text-maindarkgray mb-12 text-center md:text-left">
          Quick Answers
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left big card */}
          <div className="flex flex-col justify-between">
            <div
              className={`p-8 rounded-3xl shadow-xl mb-8 transition transform hover:-translate-y-1 hover:shadow-2xl ${
                faqs[0].highlight ? "bg-maindarkgray text-white" : "bg-white"
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-roboto-slab font-semibold mb-4">
                {faqs[0].q}
              </h3>
              <p className="text-gray-600 md:text-lg font-roboto-slab">
                {faqs[0].a}
              </p>
            </div>

            <button className="mt-auto w-full md:w-[220px] inline-block px-6 py-3 border border-maindarkgray rounded-lg text-maindarkgray font-semibold hover:bg-maindarkgray hover:text-white transition">
              View All FAQs
            </button>
          </div>

          {/* Right column stacked FAQs */}
          <div className="flex flex-col gap-6">
            {faqs.slice(1).map((faq, i) => (
              <div
                key={i}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl md:text-2xl font-roboto-slab text-maindarkgray font-semibold mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600 md:text-lg font-roboto-slab">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
