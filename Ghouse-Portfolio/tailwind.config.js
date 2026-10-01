/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        brand: {
          50: '#fdf2f4',
          100: '#fbe6ea',
          200: '#f8d0d9',
          300: '#f2a9b9',
          400: '#e5728d',
          500: '#b91c40',
          600: '#800020',
          700: '#67061d',
          800: '#4b0515',
          900: '#34030e',
          950: '#1f0107',
        },
        maroon: {
          50: '#fdf2f4',
          100: '#fbe6ea',
          200: '#f8d0d9',
          300: '#f2a9b9',
          400: '#e5728d',
          500: '#b91c40',
          600: '#800020',
          700: '#67061d',
          800: '#4b0515',
          900: '#34030e',
          950: '#1f0107',
        },
        emerald: {
          50: '#fdf2f4',
          100: '#fbe6ea',
          200: '#f8d0d9',
          300: '#f2a9b9',
          400: '#e5728d',
          500: '#b91c40',
          600: '#800020',
          700: '#67061d',
          800: '#4b0515',
          900: '#34030e',
          950: '#1f0107',
        }
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(185, 28, 64, 0.3)',
        'glow': '0 0 25px -5px rgba(128, 0, 32, 0.45)',
        'glow-cyan': '0 0 25px -5px rgba(229, 114, 141, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
