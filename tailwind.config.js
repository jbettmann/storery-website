/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
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
          100: "#094d26",
          200: "#09f923",
        },
      },
    },
  },
  plugins: [],
};
