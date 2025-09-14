// components/contact/ContactForm.tsx
// components/contact/ContactForm.tsx
export default function ContactForm() {
  return (
    <section
      className="bg-mainpeachpuff py-16 relative overflow-hidden"
      id="contact-form"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center xl:px-10 2xl:px-0">
        {/* Left Column: Content + Form */}
        <div>
          <h2 className="text-3xl text-maindarkgray font-roboto-slab font-bold mb-6">
            Send Us a Message
          </h2>
          <p className="max-w-lg mb-10 font-roboto-slab text-mainlightgray">
            Ready to book a halwai or have questions about our services? Fill
            out this quick form and our team will get back to you within 2 hours
            during business hours.
          </p>

          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-mainlightgray text-mainlightgray  outline-none focus:border-none rounded-xl focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-mainlightgray text-mainlightgray outline-none focus:border-none rounded-xl focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Event Date & Guest Count"
              className="w-full p-4 border border-mainlightgray text-mainlightgray outline-none focus:border-none rounded-xl focus:ring-2 focus:ring-red-500"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-4 border border-mainlightgray text-mainlightgray outline-none focus:border-none rounded-xl focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-red-500 text-white font-semibold  py-3 px-6 rounded-xl hover:bg-red-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Column: Image */}
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Halwai catering"
            className="rounded-2xl shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
