/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary" : "#8008f7",
      },
      fontFamily: {
        "poppins" : ["Poppins, sans-serif"]
      },
      boxShadow: {
        '3xl': ' 16px 16px rgb(0, 0, 0)',
      }
    },
  },
  plugins: [],
}