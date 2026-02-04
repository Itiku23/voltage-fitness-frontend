/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
  keyframes: {
    fadeIn: {
      "0%": { opacity: "0", transform: "translateY(10px)" },
      "100%": { opacity: "1", transform: "translateY(0)" },
    },
  },
  animation: {
    fadeIn: "fadeIn 0.6s ease-out forwards",
  },
},

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
