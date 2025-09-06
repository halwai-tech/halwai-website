import Image from "next/image";
import { Linkedin } from "lucide-react";

const leaders = [
  {
    name: "A",
    role: "Co-Founder",
    image: "/images/about/name.png",
    linkedin: "A",
  },
  {
    name: "B",
    role: "Co-Founder",
    image: "/images/about/name.png",
    linkedin: "B",
  },
  {
    name: "C",
    role: "Co-Founder",
    image: "/images/about/name.png",
    linkedin: "C",
  },
  {
    name: "D",
    role: "COO",
    image: "/images/about/name.png",
    linkedin: "D",
  },
];

const LeaderShip = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-main font-playfair mb-12">
        Behind the Vision
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 ">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="bg-main border rounded-xl shadow-sm p-6 text-center 
                       hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-center text-primary mb-4">
              <Image
                src={leader.image}
                alt={leader.name}
                width={180}
                height={180}
                className="object-contain rounded-full ring-2 ring-gray-200 hover:ring-yellow-500 transition"
              />
            </div>
            <h3 className="text-lg font-semibold text-yellow-700">
              {leader.name}
            </h3>
            <p className="text-white mb-4">{leader.role}</p>
            <a
              href={leader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full 
                         bg-primary text-white hover:bg-primary hover:scale-110 
                         transition-transform duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeaderShip;
