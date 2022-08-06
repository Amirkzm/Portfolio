/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      header: ["Oswald", "san-serif"],
      body: ["Roboto Mono", "monospace"],
    },
    screens: {
      xs: "375px",
      ls: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
