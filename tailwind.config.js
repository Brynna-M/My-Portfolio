export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tile': 'url("/home-page.png")',
      },
      fontFamily: {
        shrikhand: ['Shrikhand', 'cursive'],
        quicksand: ['Quicksand', 'sans-serif'],
        bungee: ['"Bungee Inline"', 'cursive'],
      },
      colors: {
        'dark-plum': '#3F1757',
        'bright-lilac': '#D18AFC',
        'turquoise-aqua': '#36EEBE',
        'deep-rose': '#F36A8A',
        'bright-blue-jean': '#3FA6C0',
        'deep-sea-blue': '#2E70A6',
        'nanas-nails': '#F99D78',
        'honey-yellow': '#FFD166',
        'bright-sunny-yellow': '#FDFFAE',
      },
    },
  },
  plugins: [],
}