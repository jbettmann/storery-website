/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./src/**/*.{css}",
    "./public/index.html",
  ],
  theme: {
    // screens: {
    //   sm: "720px",
    //   md: "850px",
    //   lg: "1200px",
    // },
    // spacing: {
    //   1: "8px",
    //   2: "12px",
    //   3: "16px",
    //   4: "24px",
    //   5: "32px",
    //   6: "48px",
    // },
    extend: {
      colors: {
        storeyGreen: {
          100: "#14834E",
          200: "#1fa465",
          300: "#0c4c26",
        },
      },
      screens: {
        xs: "410px",
        testie: "1041px",
        "3xl": "1750px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
