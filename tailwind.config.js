/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        MB: "MontserratBold",
        G: "Gabelisa",
        F: "Fredricka",
        MEB: "MontserratExtraBold",
        MR: "MontRegular",
        MM: "MontMedium"
      }
    },
  },
  plugins: [],
}

