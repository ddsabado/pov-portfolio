import { useState } from 'react';
import { AdvancedImage, lazyload, placeholder } from '@cloudinary/react';
import { photoGroups, getThumbnail, getFullRes, Photo } from '../data/photos';
import PhotoModal from './PhotoModal';

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const prefetchFullRes = (publicId: string) => {
    const img = new Image();
    img.src = getFullRes(publicId).toURL();
  };

  return (
    <section id="gallery" className="pb-24" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {photoGroups.map((group, groupIndex) => {
          const { photos } = group;
          // Alternate which column starts higher each group
          const leftOffset = groupIndex % 2 === 0 ? '0' : 'mt-16';
          const rightOffset = groupIndex % 2 === 0 ? 'mt-16' : '0';

          // Split photos into left and right columns
          const leftPhotos = photos.filter((_, i) => i % 2 === 0);
          const rightPhotos = photos.filter((_, i) => i % 2 === 1);

          return (
            <div key={group.name} className="mb-4">
              <div className="flex gap-4 items-start">
                {/* Left column */}
                <div className={`flex flex-col gap-4 flex-1 ${leftOffset}`}>
                  {leftPhotos.map(photo => (
                    <div
                      key={photo.id}
                      onClick={() => setSelectedPhoto(photo)}
                      onMouseEnter={() => prefetchFullRes(photo.publicId)}
                      className="cursor-pointer overflow-hidden"
                    >
                      <AdvancedImage
                        cldImg={getThumbnail(photo.publicId)}
                        plugins={[lazyload(), placeholder({ mode: 'blur' })]}
                        alt={photo.publicId.split('_')[0]}
                        className="w-full object-cover hover:opacity-90 transition-opacity duration-[200ms]"
                      />
                    </div>
                  ))}
                </div>

                {/* Right column */}
                <div className={`flex flex-col gap-4 flex-1 ${rightOffset}`}>
                  {rightPhotos.map(photo => (
                    <div
                      key={photo.id}
                      onClick={() => setSelectedPhoto(photo)}
                      onMouseEnter={() => prefetchFullRes(photo.publicId)}
                      className="cursor-pointer overflow-hidden"
                    >
                      <AdvancedImage
                        cldImg={getThumbnail(photo.publicId)}
                        plugins={[lazyload(), placeholder({ mode: 'blur' })]}
                        alt={photo.publicId.split('_')[0]}
                        className="w-full object-cover hover:opacity-90 transition-opacity duration-[200ms]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
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
