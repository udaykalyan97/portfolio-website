/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "media",
  theme: {
    extend: {
      screens: {
        "sm": "480px"
      }
    },
  },
  plugins: [],
}

