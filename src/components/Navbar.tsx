import { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80) {
        setVisible(true);
      } else if (currentY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
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
        <div className="flex items-center justify-between h-14">
          <span
            onClick={() => navigate('/')}
            className="font-bold text-2xl tracking-tight cursor-pointer hover:text-gray-300 transition-colors duration-[200ms]"
          >
            DDWUMP
          </span>
          <div className="flex items-center gap-6 text-[14px] font-light leading-[1.4] text-gray-400">
            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== '/gallery') {
                  navigate('/gallery');
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="hover:text-white transition-colors duration-[200ms]"
            >
              Scroll Gallery
            </a>
            <a
              href="/gear"
              onClick={(e) => { e.preventDefault(); navigate('/gear'); }}
              className="hover:text-white transition-colors duration-[200ms]"
            >
              Gear
            </a>
            <a href="#about" className="hover:text-white transition-colors duration-[200ms]">
              About
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
