/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: '640px' },
        md: { max: '768px' },
        lg: { max: '1024px' },
        xl: { max: '1280px' },
        '2xl': { max: '1536px' },
      },
      fontFamily: {
        body: ['DM Sans', 'sans-serif'],
      },
      backgroundColor: {
        black: '#070709',
      },
      backgroundImage: {
        'gradient-to-r':
          'linear-gradient(105.94deg, #0E0D10 24.24%, #0E0D10 53.01%, #121216 75.95%)',
        'eclipse-43':
          'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
        'eclipse-10':
          'linear-gradient(10deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
        'eclipse-blue':
          'linear-gradient(85.11deg, #855BDE -73.67%, #1E3A8A 135.68%)',
        'eclipse-text':
          'linear-gradient(120.76deg, #C850C0 13.18%, #FFCC70 101.49%)',
      },
      boxShadow: {
        form: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        input: '0px 0px 20px 0px #855BDE',
      },
    },
  },
  plugins: [],
}
