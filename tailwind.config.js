// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily : {
        montserrat : [
          '"Montserrat"',
          "sans-serif"
        ],
        poppins : [
          '"Poppins"',
          "sans-serif"
        ],
      },
      colors : {
        brand: '#FF6525',
      },
      text : {
        100: '#1C1C1C',
        200: '#212838',
        300: '#373737',
      },
      green : '#E3EBD6',
      background : '#FAF8F4',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}