import clapperboard from './images/clapperboard.png';

// /src/assets/image.jsx
// Centralized image exports so you can do:
// import { clapperboard } from 'src/assets/image';
// or
// import images from 'src/assets/image'; const src = images.clapperboard;


const images = {
    clapperboard,
};

// named exports for convenience
export { clapperboard };

// default export (lookup helper)
export default {
    ...images,
    get: (name) => images[name] || null,
};