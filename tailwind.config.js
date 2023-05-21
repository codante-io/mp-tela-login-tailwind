/** @type {import('tailwindcss').Config} */
export default {
  // purge: ['./src/components/**/*.{js,jsx,ts,tsx}', './index.html'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'p-b1-styles': '#0E0D10',
        'primary-b2': '#121216',
      },
      gradientColorStops: {
        'custom-gradient': [
          '#0E0D10 24.24%',
          '#0E0D10 53.01%',
          '#121216 75.95%',
        ],
      },
    },
  },
  plugins: [],
}
