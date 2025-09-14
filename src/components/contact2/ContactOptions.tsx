// components/contact/ContactOptions.tsx
import { Phone, Mail, MessageCircle } from "lucide-react";

const options = [
  {
    icon: <Phone className="w-8 h-8 text-red-500" />,
    title: "Phone Support",
    detail: "Call us at 9643986161",
    desc: "Available 10AM - 8PM, all days for instant assistance with bookings and queries.",
  },
  {
    icon: <Mail className="w-8 h-8 text-red-500" />,
    title: "Email Us",
    detail: "support@halwaiwala.in",
    desc: "Send detailed inquiries and we'll respond within 24 hours with personalised solutions.",
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-red-500" />,
    title: "WhatsApp Chat",
    detail: "Start instant conversation",
    desc: "Quick responses for urgent bookings, menu discussions, and real-time coordination.",
  },
];

export default function ContactOptions() {
  return (
    <section
      className="py-20  relative overflow-hidden"
      id="contact-options"
    >
      <div className="max-w-5xl mx-auto xl:px-10 2xl:px-0">
        <h2 className="text-3xl text-maindarkgray font-bold text-center mb-12">
          Quick Contact Options
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {options.map((o, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
            >
              <div className="flex justify-center mb-4">{o.icon}</div>
              <h3 className="text-xl text-maindarkgray font-semibold mb-2">{o.title}</h3>
              <p className="font-medium text-red-600">{o.detail}</p>
              <p className="text-gray-600 mt-2">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
