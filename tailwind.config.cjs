/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        'hawkes-blue': {
          DEFAULT: '#C5D0FB',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#EBEFFE',
          500: '#C5D0FB',
          600: '#91A5F7',
          700: '#5C7BF4',
          800: '#2850F0',
          900: '#0E36D1',
        },
        'portage-blue': {
          DEFAULT: '#7D92E8',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#E5E9FA',
          300: '#C2CCF4',
          400: '#A0AFEE',
          500: '#7D92E8',
          600: '#4D6AE0',
          700: '#2546D0',
          800: '#1C36A0',
          900: '#142671',
        },
      },
    },
  },
  plugins: [],
};
