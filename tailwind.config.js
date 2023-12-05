/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Centering the container by default
      container: {
        center: true,
        // add horizontal padding with break points
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
         'primary': 'green',
         'secondary': '#ffed4a',
         'danger': '#e3342f',
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

