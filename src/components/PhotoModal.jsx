import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { getPhotoUrl, transforms, photos } from '../data/photos';

const PhotoModal = ({ photo, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        navigatePhoto(-1);
      } else if (e.key === 'ArrowRight') {
        navigatePhoto(1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [photo]);

  const navigatePhoto = (direction) => {
    const currentIndex = photos.findIndex(p => p.id === photo.id);
    const newIndex = (currentIndex + direction + photos.length) % photos.length;
    const newPhoto = photos[newIndex];
    window.history.replaceState(null, '', `#photo-${newPhoto.id}`);
  };

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
        onClick={(e) => {
          e.stopPropagation();
          navigatePhoto(-1);
        }}
        className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          navigatePhoto(1);
        }}
        className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Next photo"
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      <div
        className="max-w-7xl max-h-[90vh] p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={getPhotoUrl(photo.publicId, transforms.fullRes)}
          alt={photo.title}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />
        <div className="mt-4 text-center text-white">
          <h3 className="text-2xl font-semibold">{photo.title}</h3>
          {photo.description && (
            <p className="text-gray-300 mt-2">{photo.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
