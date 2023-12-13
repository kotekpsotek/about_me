/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        main: "rgb(0, 0, 0)",
        card: "rgb(30, 30, 30)"
      }
    },
  },
  plugins: [],
}