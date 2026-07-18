import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { Camera } from 'lucide-react';

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80) {
        setVisible(true);
      } else if (currentY > lastScrollY.current) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true);  // scrolling up
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className="bg-black text-white fixed w-full z-50 border-b border-gray-800"
      animate={{ y: visible ? 0 : '-100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-gray-400" />
            <span className="font-display text-lg font-medium tracking-tight">POV</span>
          </div>
          <div className="flex items-center gap-6 text-[14px] font-medium leading-[1.4]">
            <a href="#gallery" className="text-gray-400 hover:text-white transition-colors duration-[200ms]">
              Gallery
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-[200ms]">
              About
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
