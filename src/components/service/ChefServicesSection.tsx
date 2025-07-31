export default function ChefServicesSection() {
  return (
    <section className="py-16 px-4 md:px-16 bg-white font-slab">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left - Image */}
        <div className="relative w-full lg:w-1/3">
          <img
            src="/images/service/service-chef2.jpg"
            alt="Chef Cooking"
            className="shadow-md w-full"
          />
          <img
            src="/images/service/dish.png"
            alt="Decorative Dish"
            className="absolute  top-1/2 -right-40 transform -translate-y-1/2 w-60 h-60 object-cover z-10 rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Right - Content */}
        <div className="w-full lg:w-1/2">
          <p className="text-sm text-[#C7702A] uppercase tracking-widest mb-2 font-roboto-slab">
            Halwai Specialties
          </p>
          <h2 className="text-4xl text-black font-playfair leading-tight mb-6">
            Hire Chefs for Events, Festivals & Birthday Parties
          </h2>

          <ul className="space-y-4 text-gray-700 text-base font-roboto-slab">
            <li className="flex items-start gap-2">
              <span className="text-[#C7702A]   font-roboto-slab">■</span>
              Professional chefs for weddings, birthdays, and festive occasions
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C7702A]  font-roboto-slab">■</span>
              Customized menus for all dietary needs & preferences
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C7702A]   font-roboto-slab">■</span>
              Authentic halwai preparations with modern presentation
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C7702A]   font-roboto-slab">■</span>
              On-site cooking and live counters available
            </li>
          </ul>

          <button className="mt-8 px-6 py-3 border border-[#C7702A] text-[#C7702A] hover:bg-[#C7702A] hover:text-white transition-all font-playfair duration-200  font-medium">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
