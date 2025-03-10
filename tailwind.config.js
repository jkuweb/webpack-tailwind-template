/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
export default {
  content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'light-grey': '#E5EEE5',
        purple: '#7652C6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [typography],
};
