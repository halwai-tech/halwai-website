import React from "react";

const WhoWeAre = () => {
  return (
    <section className="py-16">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-playfair text-maindarkgray font-bold mb-10 text-center md:text-left">
        Who We Are
      </h2>

      {/* Content */}
      <div className="space-y-8 font-roboto-slab text-gray-700 leading-relaxed text-justify md:text-left">
        <p>
          Halwai is India’s leading platform for booking traditional sweet makers and caterers for all occasions. From expert halwais, dessert specialists, and traditional cooks to full catering services, event helpers, and kitchen support—Halwai brings authentic Indian taste and hospitality to your doorstep. Whether it’s weddings, festivals, poojas, house parties, or corporate events, Halwai ensures high-quality sweets, snacks, and catering arrangements. Since its inception in 2019, Halwai has delighted over <span className="font-semibold text-red-600">10 lakh customers</span> and built a trusted network of <span className="font-semibold text-red-600">5,000 skilled halwais</span> and catering professionals across <span className="font-semibold text-red-600">20+ cities</span> in India.
        </p>

        <p>
          Halwai has become the fastest-growing on-demand traditional sweet and catering service provider in India, offering a wide variety of <span className="font-semibold text-red-600">200+ authentic Indian sweets and snacks</span>. From classic delights like Gulab Jamun, Jalebi, Rasgulla, and Ladoo to premium delicacies such as Kaju Katli, Rasmalai, Ghewar, and Malpua, Halwai brings the rich taste of tradition to every celebration. It is currently operational in Delhi, Bengaluru, Mumbai, Navi Mumbai, Thane, Pune, Hyderabad, Kolkata, Chennai, Jaipur, Chandigarh Tricity, Ahmedabad, Surat, Indore, Goa, Noida, Gurugram, Faridabad, Ghaziabad, Greater Noida, and several other cities across India.
        </p>

        <p>
          Halwai partners are expert sweet makers and traditional caterers with years of experience in preparing authentic Indian mithai and snacks. Many of them come from reputed sweet shops and catering backgrounds, specializing in regional delicacies and festive preparations. We carefully verify, train, and conduct background checks of all halwais and catering staff before onboarding them to our platform, ensuring reliability and quality. Our partners maintain high standards of hygiene and follow all safety guidelines to deliver a trusted and delightful experience for every occasion.
        </p>

        <p className="font-medium text-gray-900">
          So forget all kitchen and house party hassles and book our services to enjoy with your guests. Visit{" "}
          <a
            href="https://www.Halwai.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            www.Halwai.in
          </a>{" "}
          or Call <span className="text-blue-600 font-semibold">+91 9643986161</span>.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;
