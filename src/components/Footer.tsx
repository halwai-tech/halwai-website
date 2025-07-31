import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1E0202] text-white pb-12 pt-30">
      <div className="max-w-7xl mx-auto  flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left: Contact Info */}
        <div>
          <h3 className="text-4xl font-playfair  mb-4">Our Contact</h3>
          <p className="text-xl mb-1 font-roboto-slab">contact@domain.com</p>
          <p className="text-xl font-roboto-slab">+62 887-1106-22814</p>
        </div>

        {/* Center: Logo and Navigation */}
        <div className="text-center flex-1">
          <h2 className="text-6xl font-playfair font-semibold mb-2">Halwai</h2>
          <nav className="flex justify-center gap-6  mb-4 font-roboto-slab text-xl">
            <a href="#" className="hover:text-orange-400">Home</a>
            <a href="#" className="hover:text-orange-400">About</a>
            <a href="#" className="hover:text-orange-400">Services</a>
            <a href="#" className="hover:text-orange-400">Contact</a>
          </nav>
          <div className="flex justify-center gap-4 text-[#C7702A] text-lg">
            <a href="#"><Facebook  size={30}/></a>
            <a href="#"><Twitter size={30} /></a>
            <a href="#"><Instagram size={30} /></a>
            <a href="#"><Youtube size={30} /></a>
          </div>
        </div>

        {/* Right: Address */}
        <div>
          <h3 className="text-4xl font-playfair  mb-4">Our Office</h3>
          <p className="text-xl font-roboto-slab">Jl. Danau Tamblingan No.180,</p>
          <p className="text-xl font-roboto-slab">Sanur, Denpasar, Bali 80222</p>
        </div>
      </div>

      {/* Divider + Bottom */}
      <div className=" max-w-7xl mx-auto border-t border-gray-300 mt-12 pt-6 relative text-center text-sm px-6 "> 
        <p className="text-gray-300 font-roboto-slab">© 2023 Halwai by YourCompany. All Rights Reserved.</p>

        {/* Scroll-to-top button */}
        <a href="#top" className="absolute right-6 bottom-[0px]">
          <div className="bg-[#C7702A] hover:bg-[#C7702A] transition p-3 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </div>
        </a>
      </div>
    </footer>
  );
}
