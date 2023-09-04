/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1150px'
      },
      colors: {
        'primary': '#3734A9',
        'textColor': '#757095',
        'bg-c': '#F3F7FA',
        'bg-i' : '#BBB5E0',
        'btnC': '#FF7F5C'
      },
      fontFamily:{
        'man': ['Manrope', 'sans-serif']
      },
      lineHeight: {
        'myChoice': '56px'
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}