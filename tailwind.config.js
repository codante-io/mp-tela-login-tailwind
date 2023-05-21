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
        'login-bg': '#070709',
        'input': '#111112'
      },
      gradientColorStops: {
        'custom-gradient': [
          '#0E0D10 24.24%',
          '#0E0D10 53.01%',
          '#121216 75.95%',
        ],
        'custom-point-gradient': [
          '#4158D0 0%',
          '#C850C0 46%',
          '#FFCC70 100%',
        ]
      },
    },
  },
  plugins: [],
}