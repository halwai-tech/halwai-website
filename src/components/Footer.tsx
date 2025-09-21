import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function NewFooter() {
  return (
    <footer className="bg-gray-50 pt-20 pb-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-12">

        {/* Left Section: Logo and About */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-poppins font-bold mb-4 text-gray-900">Halwai Wala</h2>
          <p className="text-lg font-roboto mb-4 text-gray-700">
            Authentic Indian catering and sweets. We connect you with top chefs and halwais for unforgettable experiences.
          </p>

          {/* Newsletter Subscription */}
          <div className="mt-4 flex flex-col sm:flex-row justify-center md:justify-start gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900 w-full sm:w-auto"
            />
            <button className="px-4 py-2 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-700 transition-colors w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>

        {/* Center Section: Navigation */}
        <div className="flex-1 text-center">
          <h3 className="text-2xl md:text-3xl font-poppins font-semibold mb-4 text-gray-900">Quick Links</h3>
          <nav className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-8 mb-4 font-roboto text-lg text-center">
            <a href="/" className="text-gray-900 hover:text-gray-600 transition-colors">Home</a>
            <a href="/about" className="text-gray-900 hover:text-gray-600 transition-colors">About</a>
            <a href="/services" className="text-gray-900 hover:text-gray-600 transition-colors">Services</a>
            <a href="/contact" className="text-gray-900 hover:text-gray-600 transition-colors">Contact</a>
          </nav>
        </div>

        {/* Right Section: Contact Info */}
        <div className="flex-1 text-center md:text-right">
          <h3 className="text-2xl md:text-3xl font-poppins font-semibold mb-4 text-gray-900">Get in Touch</h3>
          <p className="text-lg font-roboto mb-2 text-gray-700">Phone: +91 96439 86161</p>
          <p className="text-lg font-roboto text-gray-700">Email: contact@halwaiwala.com</p>
          <div className="mt-4 flex justify-center md:justify-end gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="p-3 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors shadow-md"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Legal */}
      <div className="text-center mt-12 border-t border-gray-200 pt-6 text-sm flex flex-col md:flex-row justify-center gap-4 md:gap-8 items-center">
        <p className="text-gray-700 font-roboto">© 2025 Halwai Wala. All Rights Reserved.</p>
        <a href="/terms" className="text-gray-700 hover:text-gray-500 transition-colors">Terms of Service</a>
        <a href="/privacy" className="text-gray-700 hover:text-gray-500 transition-colors">Privacy Policy</a>
        <a href="/refund" className="text-gray-700 hover:text-gray-500 transition-colors">Refund Policy</a>
      </div>
    </footer>
  );
}
