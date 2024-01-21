/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      "clear-link-gray-bg": "#F2F4F7",
      "clear-link-gray-border": "#D0D5DD",
      "clear-link-light-gray-bg": "#EFF8FF",
      "clear-link-light-gray-border": "#B2DDFF",
      "clear-link-darket-text": "#101828",
      "clear-link-lightblue-text": "#528BFF",
      "clear-link-blue-bg": "#175CD3",
      "clear-link-gray-text": "#667085",
      "clear-link-gold": "#FDB022",
    },
  },
  plugins: [],
};
