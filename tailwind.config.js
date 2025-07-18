// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#181A20', // רקע ראשי כהה
        surface: '#23262F',    // רקע משני/כרטיסים
        text: {
          DEFAULT: '#F5F7FA',  // טקסט ראשי
          muted: '#B0B3B8',    // טקסט משני
        },
        primary: '#FFB300',    // כתום-זהב (CTA)
        accent: '#00C2FF',     // טורקיז-כחול (הדגשות)
        neon: {
          cyan: '#00C2FF',
          emerald: '#00FFB2',
          amber: '#FFB300',
        },
      },
      boxShadow: {
        'neon-cyan': '0 0 8px #00C2FF, 0 0 2px #00C2FF',
        'neon-emerald': '0 0 8px #00FFB2, 0 0 2px #00FFB2',
        'neon-amber': '0 0 8px #FFB300, 0 0 2px #FFB300',
      },
      dropShadow: {
        'neon-cyan': '0 0 8px #00C2FF, 0 0 2px #00C2FF',
        'neon-emerald': '0 0 8px #00FFB2, 0 0 2px #00FFB2',
        'neon-amber': '0 0 8px #FFB300, 0 0 2px #FFB300',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'gradient-x': 'gradient-x 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
