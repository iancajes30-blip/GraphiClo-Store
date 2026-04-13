/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      colors: {
        primary: "#141414", // dark (main color)
        secondary: "#ffffff", // white text
        light: "#f6f6f6", // light background
      },
      fontSize: {
        logo: "25px",
        mainSize: "15px",
        smSize: "13px;",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0, transform: "translateY(5px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fade: "fade 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
