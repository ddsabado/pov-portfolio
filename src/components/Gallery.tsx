import { useState } from 'react';
import { motion } from 'motion/react';
import { AdvancedImage, lazyload, placeholder } from '@cloudinary/react';
import { photoGroups, getThumbnail, getFullRes, Photo } from '../data/photos';
import PhotoModal from './PhotoModal';

const photoVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 18,
      mass: 0.8,
    },
  },
};

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
          const leftOffset = groupIndex % 2 === 0 ? '' : 'mt-16';
          const rightOffset = groupIndex % 2 === 0 ? 'mt-16' : '';

          const leftPhotos = photos.filter((_, i) => i % 2 === 0);
          const rightPhotos = photos.filter((_, i) => i % 2 === 1);

          return (
            <div key={group.name} className="mb-4">
              <div className="flex gap-4 items-start">
                <div className={`flex flex-col gap-4 flex-1 ${leftOffset}`}>
                  {leftPhotos.map(photo => (
                    <motion.div
                      key={photo.id}
                      variants={photoVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                      onClick={() => setSelectedPhoto(photo)}
                      onMouseEnter={() => prefetchFullRes(photo.publicId)}
                      className="cursor-pointer overflow-hidden"
                      whileHover={{ opacity: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <AdvancedImage
                        cldImg={getThumbnail(photo.publicId)}
                        plugins={[lazyload(), placeholder({ mode: 'blur' })]}
                        alt={photo.publicId.split('_')[0]}
                        className="w-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
                <div className={`flex flex-col gap-4 flex-1 ${rightOffset}`}>
                  {rightPhotos.map(photo => (
                    <motion.div
                      key={photo.id}
                      variants={photoVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                      onClick={() => setSelectedPhoto(photo)}
                      onMouseEnter={() => prefetchFullRes(photo.publicId)}
                      className="cursor-pointer overflow-hidden"
                      whileHover={{ opacity: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <AdvancedImage
                        cldImg={getThumbnail(photo.publicId)}
                        plugins={[lazyload(), placeholder({ mode: 'blur' })]}
                        alt={photo.publicId.split('_')[0]}
                        className="w-full object-cover"
                      />
                    </motion.div>
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
