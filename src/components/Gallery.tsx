import { useState } from 'react';
import { AdvancedImage, lazyload, placeholder } from '@cloudinary/react';
import { photos, getThumbnail, getFullRes, Photo } from '../data/photos';
import PhotoModal from './PhotoModal';

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const prefetchFullRes = (publicId: string) => {
    const img = new Image();
    img.src = getFullRes(publicId).toURL();
  };

  return (
    <section id="gallery" className="bg-black pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {photos.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-xl">No photos yet. Add some photos to get started!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map(photo => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                onMouseEnter={() => prefetchFullRes(photo.publicId)}
                className="cursor-pointer aspect-[3/4]"
              >
                <AdvancedImage
                  cldImg={getThumbnail(photo.publicId)}
                  plugins={[lazyload(), placeholder({ mode: 'blur' })]}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          onNavigate={(photo) => setSelectedPhoto(photo)}
        />
      )}
    </section>
  );
};

export default Gallery;
