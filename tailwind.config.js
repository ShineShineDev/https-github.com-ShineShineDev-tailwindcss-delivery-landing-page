/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        shine : 'red'
      },
      backgroundImage: {
        'deli': "url('/imgs/deli.jpg')",
      }
    },
  },
  plugins: [],
}