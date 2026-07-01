# Your Gallery

A modern photography gallery web application featuring an interactive 3D image carousel and a masonry-style photo grid. Built with React and Three.js to showcase visual storytelling through an immersive browsing experience.

## 📸 Preview

📹 [Klik untuk melihat preview video](/preview.mp4)

## ✨ Features

- **3D Hero Carousel**: Interactive Three.js-powered image carousel with scroll and keyboard navigation
- **Masonry Gallery Layout**: Responsive multi-column grid that adapts to different screen sizes
- **Lightbox Viewer**: Full-screen image viewing with navigation and captions
- **Infinite Scrolling**: Automatically loads more images as you scroll down
- **Lazy Loading**: Images load on-demand to optimize performance
- **Keyboard Navigation**: Control the 3D carousel using arrow keys
- **Touch Support**: Mobile-friendly touch gestures for navigation
- **Auto-play Mode**: 3D carousel automatically advances after 3 seconds of inactivity
- **Smooth Animations**: CSS and WebGL animations for a polished experience
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Image Protection**: Prevents right-click and drag operations on gallery images
- **Component Memoization**: Optimized re-renders for better performance
- **WebGL Fallback**: Graceful degradation when WebGL is not available

## 🛠 Tech Stack

### Frontend
- **React** 19.2.7
- **TypeScript** 6.0.2
- **Vite** 8.1.0

### 3D Graphics
- **Three.js** 0.185.0
- **React Three Fiber** 9.6.1
- **React Three Drei** 10.7.7

### Styling
- **Tailwind CSS** 4.3.1
- **Custom CSS** (Gallery components)

### Gallery & UI
- **yet-another-react-lightbox** 3.32.0 (with Captions plugin)
- **react-intersection-observer** 10.0.3

### Build Tools
- **ESLint** 10.5.0
- **TypeScript ESLint** 8.61.0

## 📁 Project Structure

```text
src/
├── components/
│   ├── ui/
│   │   └── 3d-gallery-photography.tsx
│   ├── Gallery.css
│   ├── GalleryCard.tsx
│   ├── GalleryHero.tsx
│   └── GalleryLightbox.tsx
├── pages/
│   ├── Body.tsx
│   ├── Footer.tsx
│   ├── Gallery.tsx
│   └── Header.tsx
├── hooks/
│   └── useMediaDimensions.tsx
├── services/
│   └── Gallery.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd gallery
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 🏗 Build

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## 🌍 Environment Variables

No environment variables are required.

## ⚡ Performance

The application implements several performance optimizations:

- **Lazy Loading**: Images load only when needed using native lazy loading
- **Component Memoization**: React.memo prevents unnecessary re-renders of GalleryCard and GalleryLightbox
- **Infinite Scrolling**: Uses Intersection Observer API for efficient scroll detection
- **Dynamic Image Dimensions**: Custom hook resolves image dimensions on-demand without blocking initial render
- **WebGL Optimization**: Shader-based rendering for smooth 3D animations
- **CSS Containment**: Gallery cards use `contain` property for better paint performance
- **Optimized Dependencies**: Vite's code splitting and tree-shaking reduce bundle size
- **Image Preloading**: Lightbox preloads adjacent images for faster navigation

## 🔮 Future Improvements

- Add search functionality to filter images by title
- Implement category/tag filtering system
- Add image upload capability for dynamic galleries
- Integrate with backend API for persistent storage
- Implement PWA support for offline access
- Add animation preferences for users with motion sensitivity
- Improve accessibility with better ARIA labels and screen reader support
- Add social sharing capabilities
- Implement image download with watermark option
- Add admin panel for gallery management

## 🙏 Credits

Built with:
- [React](https://react.dev/) - UI framework
- [Three.js](https://threejs.org/) - 3D graphics library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [yet-another-react-lightbox](https://yet-another-react-lightbox.com/) - Lightbox component
- [Vite](https://vite.dev/) - Build tool

Image sources:
- [Unsplash](https://unsplash.com/) - Free high-quality photography

## 📄 License

MIT License

---

Created by [Taufiqul Hakim](https://www.linkedin.com/in/taufiqul-hakim-6644843a2)
