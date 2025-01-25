/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#FFC107",
        myGreen: "#006400", 
        light: "#D9D9D9", 
        silver: "#E5E5E5", 
        appGray: "#00000080"
      }
    },
  },
  plugins: [],
}