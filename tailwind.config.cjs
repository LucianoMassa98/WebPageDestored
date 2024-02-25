/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9057D1",
        secondary: "#FFFFFF",
        footer: "#061F1D",
      },
    },
  },
  plugins: [],
};
