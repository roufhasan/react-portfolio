/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      primary: ["DM Sans", "sans-serif"],
      secondary: ["Fasthand", "cursive"],
    },
    colors: {
      primaryBlue: "#3700ff",
      primaryBlack: "#292930",
      secondary: "#8a90a2",
      white: "#ffffff",
    },
  },
  plugins: [],
};
