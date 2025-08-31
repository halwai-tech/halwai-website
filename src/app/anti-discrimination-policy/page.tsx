// app/anti-discrimination-policy/page.jsx
import React from "react";

const AntiDiscriminationPolicy = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold font-playfair text-center text-gray-900 mb-8">
        Anti Discrimination Policy
      </h1>

      <div className="space-y-6 text-lg font-roboto-slab text-gray-700 leading-relaxed ">
        <p>
          COOΧ seeks to empower thousands of cooks, chefs, cleaners, bartenders,
          waiters and other partners in India to deliver safe, reliable and high
          quality service at your doorsteps. COOΧ therefore does not tolerate,
          and prohibits discrimination against customers or service providers
          based on religion, caste, race, national origin, disability, sexual
          orientation, sex, marital status, gender identity, age or any other
          characteristics that may be protected under applicable laws.
        </p>

        <p>
          Such discrimination includes, but is not limited to, refusing to
          provide or accept services based on any of these characteristics.
        </p>

        <p>
          Any customer or services partner found to have violated this
          prohibition will lose access to the COOΧ platform.
        </p>
      </div>
    </section>
  );
};

export default AntiDiscriminationPolicy;
