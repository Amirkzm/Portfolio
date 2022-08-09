/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      header: ["Bebas Neue", "cursive"],
      body: ["Roboto Mono", "monospace"],
      animationText: ["Alumni Sans", "Inline One"],
      about: ["Alumni Sans Inline One", "cursive"],
      formal: ["Poppins", "Arial", "sans-serif"],
    },
    screens: {
      xs: "375px",
      ls: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
