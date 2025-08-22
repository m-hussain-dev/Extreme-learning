/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerImg: "url('../assets/hero.jpg')",
      },
    },
  },
  plugins: [],
};
