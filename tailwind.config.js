/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#F55E41',
        'greys' : '#b3b6ba'
      },
      fontFamily : {
        primary : ['Montserrat', 'sans-serif']
      }
    },
    screens: {
      'mobile': '640px',
      'tablet' : '768px',
      'desktop': '1024px',
      'widescreen': '1280px',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    }
  },
  plugins: [],
}