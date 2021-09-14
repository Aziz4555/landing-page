module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        whitesmoke:'#f5f5f5',
        pinkk:'#ffc0cb'
      },

      keyframes: {
        'fade': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        }
      },
      animation: {
        'fade': 'fade 0.8s'
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
