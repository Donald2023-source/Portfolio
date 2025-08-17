/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theBlack: "#191919",
        textGray: "#A7A7A7",
        silver: "#E5E5E5",
        appGray: "#363636",
      },
    },
  },
  plugins: [],
};
