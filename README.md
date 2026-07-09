# POV Portfolio

A modern, responsive photography portfolio built with React, Vite, and Tailwind CSS. Images are hosted on Cloudinary for optimized delivery.

## Tech Stack

- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Image Hosting:** Cloudinary
- **Deployment:** GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view in your browser.

### Build

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

Your site will be live at: `https://ddsabado.github.io/pov-portfolio/`

## Adding Photos

Edit `src/data/photos.js` to add new photos. Each photo entry follows this structure:

```javascript
{
  id: 1,
  publicId: 'your-cloudinary-public-id',
  title: 'Photo Title',
  category: 'Category Name',
  description: 'Optional description',
}
```

Photos are automatically transformed by Cloudinary:
- **Thumbnails:** `w_600,c_fill,q_auto,f_auto`
- **Full resolution:** `w_2000,q_auto,f_auto`

## Project Structure

```
POV-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Gallery.jsx
│   │   ├── PhotoModal.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── photos.js          # Photo data with Cloudinary URLs
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Features

- ✅ Responsive design (mobile-first)
- ✅ Dark theme optimized for photography
- ✅ Category filtering
- ✅ Lightbox modal with keyboard navigation (← → Esc)
- ✅ Lazy loading images
- ✅ Cloudinary image optimization
- ✅ GitHub Pages deployment ready

## Customization

- **Colors:** Edit `tailwind.config.js`
- **Font:** Inter (loaded from Google Fonts in `index.html`)
- **Social links:** Update `src/components/Footer.jsx`
- **Content:** Update sections in `src/pages/Home.jsx`

## License

MIT
