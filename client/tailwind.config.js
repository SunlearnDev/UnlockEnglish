/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideInFromLeft: 'slideInFromLeft 1s ease-in-out',
        slideInFromRight: 'slideInFromRight 1s ease-in-out',
      },
    },
  },
  plugins: [],
});

