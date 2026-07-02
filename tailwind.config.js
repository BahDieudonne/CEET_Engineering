/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        indigo: {
          950: '#150B36',
          900: '#1F1050',
          800: '#2B1670',
          700: '#3B1F91',
          600: '#4C2AB4',
        },
        gold: {
          400: '#F7C948',
          500: '#F0B429',
          600: '#D69A0B',
        },
        ink: '#12091F',
        paper: '#FAF8FF',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'circuit-fade': 'linear-gradient(180deg, #150B36 0%, #1F1050 45%, #2B1670 100%)',
      },
      boxShadow: {
        node: '0 0 0 4px rgba(247,201,72,0.15), 0 0 24px rgba(247,201,72,0.35)',
      },
    },
  },
  plugins: [],
}
