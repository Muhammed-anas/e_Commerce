/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
  
  theme: {
    extend: {
      colors:{
        primary: "#4DD0E1",
        secondary:"#52a7f5",
      },
      container: {
        center: true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem"
        }
      }
    },
  },
  plugins: [],
}