/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Forest-toned brand palette derived from the dark logo.
        forest: {
          50: '#f1f6f2',
          100: '#dceadf',
          200: '#bad6c1',
          300: '#8fbb9b',
          400: '#5f9a70',
          500: '#3f7d52',
          600: '#2d6440',
          700: '#244f34',
          800: '#1d3f2b',
          900: '#163024',
          950: '#0b1c14',
        },
        // Vivid brand accents taken from the logo mark.
        brand: {
          green: '#22cc2e',
          'green-dark': '#1ba625',
          blue: '#7cc6ec',
          'blue-dark': '#4ba6d6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [typography],
};
