/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0d0d0d',
        text: {
          DEFAULT: '#ffffff',
          muted: '#9ca3af',
        },
        primary: '#facc15',
        accent: '#7dd3fc',
      },
    },
  },
  plugins: [],
  };