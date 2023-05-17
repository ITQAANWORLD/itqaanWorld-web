/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        headerBlue:'hsl(214, 96%, 41%)',
        primaryBlue: ' 	hsl(222, 72%, 56%)',
        primaryBlack: ' 	hsl(237, 24%, 16%)',
        footerText:'hsl(215, 22%, 80%)',
        strokeColor:'#a0adc1',
        darkText: 'hsl(0, 0%, 50%)',
        headerBorder: 'rgba(0,0,0,.05)',
      }
    },
  },
  plugins: [],
}

