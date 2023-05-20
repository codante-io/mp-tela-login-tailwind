/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
      },
      boxShadow: {
        form: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        input: '0px 0px 20px 0px #855BDE',
      },
    },
  },
  plugins: [],
}
