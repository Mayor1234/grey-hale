/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#80002A',
        secondary: '#B32B46',
        tertiary: '#D96076',
        nude1: '#cbc1b5',
        nude2: '#876a4c',
        nude3: '#7f776a',
        nude4: '#676140',
        nude5: '#302c1e',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
    },
  },
  plugins: [],
};
