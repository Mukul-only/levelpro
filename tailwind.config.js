/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", "serif"],
      },
      colors: {
        primary: "#726CDF",
        light_bg: "#F4F6FE",
        heading: "#231F20",
        para: "#4D5566",
        dark: "#113B4A",
      },
    },
  },
  plugins: [],
};
