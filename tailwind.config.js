/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      primary: ["DM Sans", "sans-serif"],
      secondary: ["Fasthand", "cursive"],
    },
    boxShadow: {
      custom: "0 0 10px rgba(0, 0, 0, 0.09)",
      custom2: "0px 15px 10px -15px #111",
      custom3: "0 0 10px rgba(0,0,0,.1)",
      darkModeShadow: "0px 0px 10px #5956e9",
    },
  },
  plugins: [require("daisyui")],
};
