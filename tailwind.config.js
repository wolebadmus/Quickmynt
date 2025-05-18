/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(110.62deg, #747474 50.01%, #FFFFFF 101.34%)',
      },
      fontFamily: {
        'graphik': ['Graphik', 'sans-serif'], // Add your font here
        'osande': ['Osande', 'sans-serif'], // Add Graphik Trial font
      },
      screens: {
        'tiny': '300px',
      },

    },
  },
  plugins: [],
}

