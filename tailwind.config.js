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
    },
    // colors: {
    //   primaryBlue: "#3700ff",
    //   primaryBlack: "#292930",
    //   secondary: "#8a90a2",
    //   white: "#ffffff",
    // },
  },
  plugins: [require("daisyui")],
};
