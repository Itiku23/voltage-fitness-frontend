/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#16a34a", // green
        dark: "#000000",
        gold: "#facc15",
        red: "#dc2626"
      }
    },
  },
  plugins: [],
}
