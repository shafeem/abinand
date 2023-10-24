/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'dark-purple':"#f1f5f9",
        'light-white':'rgba(255,255,0,18',
        'siteviolet':'rgb(35, 9, 57)',
        'blueColor':"#2a68ff",
        'greyIsh':'#f1f4f8',
        "cardShadow":"#252b39"
      }
    },
  },
  plugins: [],
}

