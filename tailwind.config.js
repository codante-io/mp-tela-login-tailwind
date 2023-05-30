/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-bg-100': '#0E0D10',
        'dark-bg-200': '#121216',
        'dark-bg-form': '#070709'
      },
      backgroundImage: {
        'bg-custom':  'linear-gradient(105.94deg, #0E0D10 24.24%, #0E0D10 53.01%, #121216 75.95%)',
      },
      fontFamily: {
       DM: ['Dm Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

