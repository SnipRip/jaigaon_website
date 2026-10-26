// Tailwind runs as a PostCSS plugin so the production build (webpack) can
// process CSS in-process. Hostinger's build servers cannot start the separate
// Node worker that Turbopack's CSS loaders need.
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
