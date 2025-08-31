// components/VisionStarted.jsx
import Image from "next/image";

const VisionStarted = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 space-y-24">
      {/* Our Vision */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="flex justify-center md:order-1 order-2">
          <Image
            src="/images/about/atithi.png" // replace with your image path
            alt="Our Vision"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Right: Text */}
        <div className="md:order-2 order-1">
          <h2 className="text-2xl md:text-3xl font-bold font-playfair text-gray-900 mb-4">
            Our Vision
          </h2>
          <h3 className="text-lg md:text-xl text-gray-800 font-playfair font-semibold mb-3">
            Hosts should celebrate along with their Guests
          </h3>
          <p className=" text-primary mb-3 font-roboto-slab">
            “Atithi Devo Bhava” teaches us that “Guests are God”.
          </p>
          <p className="text-gray-700 leading-relaxed font-roboto-slab">
            We carry this belief in our hearts — every time guests visit, we put
            in endless effort to ensure everything is just right. But often, in
            the rush of preparations, we forget the true joy of being together.
            At HALWAI, we aim to take that stress away. With reliable,
            high-quality services, we help families focus on bonding and making
            memories that last forever.
          </p>
        </div>
      </div>

      {/* How It Started */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <Image
            src="/images/about/bulb.png" // replace with your image path
            alt="How it Started"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold font-playfair text-gray-900 mb-4">
            How It Started?
          </h2>
          <p className="text-gray-700 leading-relaxed text-primary font-roboto-slab">
            Akshat Gupta, the founder, is passionate about South Indian flavors.
            One Sunday afternoon, while expecting guests, he had just one wish
            to enjoy dosas for lunch.
          </p>
          <ul className="list-disc list-inside font-roboto-slab text-gray-700 mt-4 space-y-2">
            <li>
              Dining at a restaurant meant leaving home.
            </li>
            <li>
              The maid cooks in haste, never with patience.
            </li>
            <li>
              His mother deserved to sit at the table, not toil in the kitchen.
            </li>
            <li>
              Online delivery? Dosas would arrive soft and soggy.
            </li>
          </ul>
          <p className="mt-4 font-roboto-slab text-gray-700">
            And then came the spark<br />
            why not invite a skilled South Indian chef home to make dosas fresh, hot, and perfectly crisp?
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionStarted;
