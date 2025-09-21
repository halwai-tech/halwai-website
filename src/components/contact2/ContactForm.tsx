// components/contact/ContactForm.tsx
export default function ContactForm() {
  return (
    <section
      className="bg-white py-8 md:py-16 relative overflow-hidden"
      id="contact-form"
    >
      <div className="mx-auto grid md:grid-cols-2 gap-10 items-center px-2">
        {/* Left Column: Form */}
        <div>
           <form className="grid gap-5 sm:gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 sm:p-5 border border-gray-300 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 sm:p-5 border border-gray-300 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
            <input
              type="text"
              placeholder="Event Date & Guest Count"
              className="w-full p-4 sm:p-5 border border-gray-300 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-4 sm:p-5 border border-gray-300 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
            <button
              type="submit"
              className="bg-red-500 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-red-600 transition shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Column: Image */}
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Send Us a Message
          </h2>
          <p className="text-gray-600 mb-8 sm:mb-10 max-w-lg text-base sm:text-lg">
            Ready to book a Halwai or have questions about our services? Fill out this form and our team will get back to you within 2 hours during business hours.
          </p>
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Halwai catering"
            className="rounded-3xl shadow-2xl object-cover w-full h-full max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
