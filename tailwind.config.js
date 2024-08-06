/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gradient: "#E4A16F",
        primary: "#9B0000",
        gray: "#ADADAD",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        lora: ["Lora", "serif"]
      },
    },
    screens: { 
      xs: '480px',
      ss: '620px',
      sm: "768px",
      md: '1060px',
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}