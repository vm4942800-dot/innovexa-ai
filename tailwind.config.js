/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060913',
          900: '#0A0F1D',
          850: '#0E162B',
          800: '#131D38',
          700: '#1B284D',
          600: '#263869',
        },
        electric: {
          cyan: '#00F2FE',
          blue: '#38BDF8',
          purple: '#8B5CF6',
          violet: '#A855F7',
          pink: '#EC4899',
          amber: '#F59E0B',
          emerald: '#10B981',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(56, 189, 248, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)' },
        }
      }
    },
  },
  plugins: [],
}
