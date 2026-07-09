import { useState } from 'react';
import { photos, getPhotoUrl, transforms, Photo } from '../data/photos';
import PhotoModal from './PhotoModal';

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...new Set(photos.map(photo => photo.category))];

  const filteredPhotos = activeCategory === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <section id="gallery" className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8">Gallery</h2>

        {/* Category filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg transition-all duration-150 ${
                activeCategory === category
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo grid */}
        {filteredPhotos.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-xl">No photos yet. Add some photos to get started!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPhotos.map(photo => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="cursor-pointer rounded-lg aspect-[3/4]"
              >
                <img
                  src={getPhotoUrl(photo.publicId, transforms.thumbnail)}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-lg"
                  onLoad={(e) => console.log('Image loaded:', e.target.src)}
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
        />
      )}
    </section>
  );
};

export default Gallery;
