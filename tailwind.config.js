/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    fontFamily:{
      fredoka:['Fredoka', 'sans-serif'],
      notoSans:['Noto Sans', 'sans-serif']
    }

    },
  },
  plugins: [],
}

