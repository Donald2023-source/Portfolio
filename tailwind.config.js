/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        my_black: "#191919",
        text_gray: "#A7A7A7", 
        silver: "#E5E5E5", 
        appGray: "#363636"
      }
    },
  },
  plugins: [],
}