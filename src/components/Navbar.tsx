import { Camera } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white fixed w-full z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Camera className="w-6 h-6" />
            <span className="text-xl font-semibold">POV</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#gallery" className="hover:text-gray-300 transition-colors">
              Gallery
            </a>
            <a href="#about" className="hover:text-gray-300 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
