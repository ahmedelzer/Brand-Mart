/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: '"Exo 2"',
    },
    container: {
      padding: {
        DEFAULT: "12px",
      },
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1440px",
    },
    extend: {
      // colors: {
      //   body: "#111111",
      //   primary: "#FF8C42",
      //   card: "#2B2B2B",
      //   text: "#FFFFFF",
      //   accent: {
      //     DEFAULT: "#FF6700",
      //     hover: "#FF4500",
      //   },
      // },
      colors: {
        body: "#0e2432", // dark navy background from the circle
        primary: "#e7e8e9", // light grey-white from text
        card: "#1d3442", // medium-dark blue tone
        text: "#ffffff", // pure white
        accent: {
          DEFAULT: "#8ca4b5", // blended blue-white (important text color)
          hover: "#b9c9d4", // lighter hover shade
        },
      },
      keyframes: {
        shake: {
          "10%, 90%": { transform: "translate3d(-1px, 0,0 )" },
          "20%, 80%": { transform: "translate3d(2px, 0,0 )" },
          "30%, 50%, 70%": { transform: "translate3d(-4px, 0,0 )" },
          "40%, 60%": { transform: "translate3d(4px, 0,0 )" },
        },
      },
      animation: {
        shake: "shake 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
