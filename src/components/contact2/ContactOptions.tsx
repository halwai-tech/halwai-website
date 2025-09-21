// components/contact/ContactOptions.tsx
import { Phone, Mail, MessageCircle } from "lucide-react";

const options = [
  {
    icon: <Phone className="w-10 h-10 text-red-600" />,
    title: "Phone Support",
    detail: "Call us at +91 96439 86161",
    desc: "Available 10AM - 8PM, all days for instant assistance with bookings and queries.",
  },
  {
    icon: <Mail className="w-10 h-10 text-red-600" />,
    title: "Email Us",
    detail: "support@halwaiwala.in",
    desc: "Send detailed inquiries and we'll respond within 24 hours with personalized solutions.",
  },
  {
    icon: <MessageCircle className="w-10 h-10 text-red-600" />,
    title: "WhatsApp Chat",
    detail: "Start instant conversation",
    desc: "Quick responses for urgent bookings, menu discussions, and real-time coordination.",
  },
];

export default function ContactOptions() {
  return (
    <section id="contact-options" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Quick Contact Options
        </h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {options.map((o, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-xl p-6 sm:p-5 text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-center mb-3">{o.icon}</div>
              <h3 className="text-lg sm:text-lg md:text-xl font-semibold text-gray-900 mb-1">
                {o.title}
              </h3>
              <p className="text-red-600 font-medium mb-1 text-sm sm:text-sm md:text-base">{o.detail}</p>
              <p className="text-gray-600 text-xs sm:text-sm md:text-sm">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
