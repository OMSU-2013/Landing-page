module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'mawuli-image':"url('/src/assets/bg.png')",
        'school-cloth':"url('/src/assets/schoolcloth.png')"
      },

      colors: {
        yellow: '#FDD610',
        green: '#08812E'
      }
    },

    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
