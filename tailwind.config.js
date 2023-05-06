/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: 'poppins',
        titleFont: 'Source Code Pro',
      },
      colors: {
        primary: '#8c52ff',
        secondary: 'RGB(118 119 122)',
      },
    },
  },
  plugins: [],
};
