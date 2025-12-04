/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}", // Scan all files inside src folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // custom blue
        secondary: "#F59E0B", // custom yellow
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
