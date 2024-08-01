/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./**.html"],
  theme: {
    extend: {
      colors: {
        primary: "#f2b541",
        "primary-500": "#eddeb7",
        secondary: "#3db166", 
        "my-blue-900": "#163269",
        "my-blue-600": "#192f59",
        "dark-900": "#181818",
        "dark-800": "#282828",
        "dark-700": "#202020",
        "dark-600": "#444444",
        "dark-500": "#6b6b6b",
        "dark-400": "#a1a1a1",
        "dark-300": "#919bad",
      },
      fontFamily: {
        "my-poppins": "Poppins",
        "my-fairplay-display": "Playfair Display"
      }
    },
  },
  plugins: [],
}

