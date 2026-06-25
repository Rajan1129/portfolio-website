/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6', // Electric violet
          600: '#7c3aed',
          700: '#6d28d9',
          DEFAULT: '#8b5cf6',
        },
        secondary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981', // Emerald
          DEFAULT: '#10b981',
        },
        accent: {
          50: '#ecfeff',
          500: '#06b6d4', // Cyan
          DEFAULT: '#06b6d4',
        },
        darkBg: '#090d16', // Deep obsidian dark mode bg
        darkCard: '#131a2a', // Sleek card dark mode bg
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(139, 92, 246, 0.15)',
        'glow-accent': '0 0 20px rgba(6, 182, 212, 0.15)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}