import { useEffect, useCallback, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { XCircle, ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';
import { getFullRes, photos, Photo } from '../data/photos';

interface PhotoModalProps {
  photo: Photo;
  onClose: () => void;
  onNavigate: (photo: Photo) => void;
}

const PhotoModal = ({ photo, onClose, onNavigate }: PhotoModalProps) => {
  const [leftVisible, setLeftVisible] = useState(true);
  const [rightVisible, setRightVisible] = useState(true);
  const leftTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rightTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Fade out arrows shortly after modal opens
  useEffect(() => {
    leftTimer.current = setTimeout(() => setLeftVisible(false), 1500);
    rightTimer.current = setTimeout(() => setRightVisible(false), 1500);
    return () => {
      if (leftTimer.current) clearTimeout(leftTimer.current);
      if (rightTimer.current) clearTimeout(rightTimer.current);
    };
  }, []);

  const showLeft = () => {
    if (leftTimer.current) clearTimeout(leftTimer.current);
    setLeftVisible(true);
  };
  const hideLeft = () => {
    leftTimer.current = setTimeout(() => setLeftVisible(false), 400);
  };
  const showRight = () => {
    if (rightTimer.current) clearTimeout(rightTimer.current);
    setRightVisible(true);
  };
  const hideRight = () => {
    rightTimer.current = setTimeout(() => setRightVisible(false), 400);
  };

  const navigatePhoto = useCallback((direction: number) => {
    const currentIndex = photos.findIndex(p => p.id === photo.id);
    const newIndex = (currentIndex + direction + photos.length) % photos.length;
    onNavigate(photos[newIndex]);
  }, [photo, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') navigatePhoto(-1);
      else if (e.key === 'ArrowRight') navigatePhoto(1);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [photo, onClose, navigatePhoto]);

  return (
    <AnimatePresence>
      <motion.div
        key="modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ backgroundColor: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(24px)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-8 text-white hover:text-gray-300 transition-colors duration-[200ms] z-10"
          aria-label="Close modal"
        >
          <XCircle className="w-8 h-8" />
        </button>

        {/* Left hover zone */}
        <div
          className="absolute left-0 top-0 w-1/4 h-full z-10 flex items-center"
          onMouseEnter={showLeft}
          onMouseLeave={hideLeft}
        >
          <motion.button
            onClick={(e) => { e.stopPropagation(); navigatePhoto(-1); }}
            className="ml-8 text-white z-10"
            aria-label="Previous photo"
            animate={{ opacity: leftVisible ? 1 : 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <ChevronLeftCircle className="w-10 h-10" />
          </motion.button>
        </div>

        {/* Right hover zone */}
        <div
          className="absolute right-0 top-0 w-1/4 h-full z-10 flex items-center justify-end"
          onMouseEnter={showRight}
          onMouseLeave={hideRight}
        >
          <motion.button
            onClick={(e) => { e.stopPropagation(); navigatePhoto(1); }}
            className="mr-8 text-white z-10"
            aria-label="Next photo"
            animate={{ opacity: rightVisible ? 1 : 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <ChevronRightCircle className="w-10 h-10" />
          </motion.button>
        </div>

        {/* Photo */}
        <motion.div
          key={photo.id}
          className="max-w-7xl max-h-[90vh] p-4"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={getFullRes(photo.publicId).toURL()}
            alt={photo.publicId.split('_')[0]}
            className="max-w-full max-h-[85vh] object-contain"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PhotoModal;
