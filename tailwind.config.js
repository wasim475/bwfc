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
        'primary': '#3734A9'
      },
      fontFamily:{
        'man': ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}