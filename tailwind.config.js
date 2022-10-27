/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('../images/bg-pattern.svg')",
        'circles': "url('../images/pattern-circles.svg')",
      },

      colors: {
        'deepBlue': '#293356',
        'lightBlue': '#848EAD',
        'lightGrey': '#ECF0FB',
        'grey': '#CFD8EF',
        'lightGreen': '#A4F3EB',
        'green': '#10D8C4',
        'lightRed': '#FEEDE8',
        'red': '#FF8D68', 
      },

      fontFamily: {
        'manrope': 'Manrope',
      },

      height: {
        'divHeight': '490px'
      },

    
    },
  },
  plugins: [],
}
