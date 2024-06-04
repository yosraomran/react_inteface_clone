/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1F81B9',
        'secondary': '#333333',
        'error': '#D44848',
      },
    },
    fontFamily: {
      'sans': ['Open Sans', 'Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};



