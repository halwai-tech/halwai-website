import React from 'react';
import {
  ChefHat,
  CalendarHeart,
  PartyPopper,
  UtensilsCrossed
} from 'lucide-react';

const features = [
  {
    icon: <ChefHat className="w-12 h-12 text-main" />,
    title: 'Professional Chefs',
    description: 'Skilled chefs for weddings, poojas, housewarming, and cultural events.',
  },
  {
    icon: <CalendarHeart className="w-12 h-12 text-main" />,
    title: 'Festival Catering',
    description: 'Traditional sweets and meals prepared fresh for all festive occasions.',
  },
  {
    icon: <PartyPopper className="w-12 h-12 text-main" />,
    title: 'Birthday & Party Food',
    description: 'Tasty and hygienic food options for birthday parties and family gatherings.',
  },
  {
    icon: <UtensilsCrossed className="w-12 h-12 text-main" />,
    title: 'Customized Menus',
    description: 'Choose from a variety of cuisines tailored to your event and guest preferences.',
  },
];

const ChefHighlights = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {item.icon}
            <h3 className="text-2xl text-main font-playfair mt-4 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 font-roboto-slab text-md">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChefHighlights;
