/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tamtam: {
          bg: '#2e274e',
          gold: '#aa9a56',
          'gold-hover': '#b8a966',
          dark: '#1f1938',
        }
      }
    },
  },
  plugins: [],
}