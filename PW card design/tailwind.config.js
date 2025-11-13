/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",          // All HTML files in root folder
    "./src/**/*.{html,js}" // All HTML and JS files in src folder
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // custom color
        secondary: '#F43F5E'
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
