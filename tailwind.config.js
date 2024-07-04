/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#0A0A0A",
        'gold-dark': '#C0A355',
        "gold": "#F7EBC5",
        "gold-light": "#F1D991",
      },
    },
  },

    
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class",
}