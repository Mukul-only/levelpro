/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#726CDF",
        light_bg: "#F4F6FE",
        heading: "#231F20",
        para: "#4D5566",
      },
    },
  },
  plugins: [],
};
