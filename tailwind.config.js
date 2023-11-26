/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mygradient: "linear-gradient(to right, #4A90E2, #9333EA)",
      },
    },
  },
  plugins: [],
};
