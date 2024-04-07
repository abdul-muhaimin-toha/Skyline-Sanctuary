/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-slider-1": "url('/src/assets/hero-banner-1.jpg')",
        "hero-slider-2": "url('/src/assets/hero-banner-2.jpg')",
        "hero-slider-3": "url('/src/assets/hero-banner-3.jpg')",
        "hero-slider-4": "url('/src/assets/hero-banner-4.jpg')",
        "hero-slider-5": "url('/src/assets/hero-banner-5.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate"],
  },
};
