/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primary: "#640BA7",
      secondary: "#330059",
      terciary: "#24003F",
      black: "#000000",
      white: "#ffffff",
    },
    boxShadow: {
      primary: "0px 0px 20px 5px #640BA7;",
    },
    keyframes: {
      navbarIn: {
        "0%": { left: "-320px" },
        "100%": { left: "0px" },
      },
      navbarOut: {
        "0%": { left: "0px" },
        "100%": { left: "-320px" },
      },
    },
    animation: {
      navbarIn: "navbarIn 0.5s ease-in-out",
      navbarOut: "navbarOut 0.5s ease-in-out",
    },
  },
};
