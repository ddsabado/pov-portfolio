import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { getFullRes, photos, Photo } from '../data/photos';

interface PhotoModalProps {
  photo: Photo;
  onClose: () => void;
  onNavigate: (photo: Photo) => void;
}

const PhotoModal = ({ photo, onClose, onNavigate }: PhotoModalProps) => {
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
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-[200ms] z-10"
          aria-label="Close modal"
        >
          <X className="w-8 h-8" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); navigatePhoto(-1); }}
          className="absolute left-4 text-white hover:text-gray-300 transition-colors duration-[200ms] z-10"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-10 h-10" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); navigatePhoto(1); }}
          className="absolute right-4 text-white hover:text-gray-300 transition-colors duration-[200ms] z-10"
          aria-label="Next photo"
        >
          <ChevronRight className="w-10 h-10" />
        </button>

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
