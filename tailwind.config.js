/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:"#F5EEE6",
        secondary:"#FFF8E3",
        ternary:"#F3D7CA",
        quaternary:"#E6A4B4"
      },
      fontFamily:{
        lafont:['Nunito'],
        paragraph:['Poppins'],
      }

    },
  },
  plugins: [],
}

