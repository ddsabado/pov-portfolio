const CLOUDINARY_CLOUD_NAME = 'b9wkiwrj';
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/`;

export const photos = [
  {
    id: 1,
    publicId: 'photo16.jpg_tgjzzh',
    title: 'test',
    category: 'portfolio',
  },
];

// Helper to generate Cloudinary URLs with transformations
export const getPhotoUrl = (publicId, transformation = '') => {
  return `${CLOUDINARY_BASE_URL}${transformation}${publicId}`;
};

// Common transformations
export const transforms = {
  thumbnail: 'w_600,q_auto,f_auto/',
  fullRes: 'w_2000,q_auto,f_auto/',
};
