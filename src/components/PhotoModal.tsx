import { useEffect, useCallback } from 'react';
import { AdvancedImage, placeholder } from '@cloudinary/react';
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
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close modal"
      >
        <X className="w-8 h-8" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); navigatePhoto(-1); }}
        className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); navigatePhoto(1); }}
        className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Next photo"
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      <div
        className="max-w-7xl max-h-[90vh] p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <AdvancedImage
          cldImg={getFullRes(photo.publicId)}
          plugins={[placeholder({ mode: 'blur' })]}
          alt={photo.title}
          className="max-w-full max-h-[85vh] object-contain"
        />
      </div>
    </div>
  );
};

export default PhotoModal;
