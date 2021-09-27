
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      rampart: ['Poppins', 'sans-serif']
    }
  },
  variants: {
    extend: {
      ringWidth: ['responsive', 'focus-within', 'focus', 'hover']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
