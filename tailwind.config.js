/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#091747',
          50: '#E6E9F2',
          100: '#C9D0E5',
          200: '#9CA8CC',
          300: '#6F7FB3',
          400: '#425699',
          500: '#2A3D77',
          600: '#1A2A5E',
          700: '#0F1E50',
          800: '#091747',
          900: '#050F2E',
        },
        royal: {
          DEFAULT: '#8000E8',
          50: '#F6EDFE',
          100: '#EAD9FD',
          200: '#D4B3FB',
          300: '#BE8DF9',
          400: '#A867F7',
          500: '#9233F5',
          600: '#8000E8',
          700: '#6600BA',
          800: '#4D008C',
          900: '#33005E',
        },
        lavender: {
          soft: '#F2EAFB',
          medium: '#C7A7F4',
        },
        mint: {
          DEFAULT: '#5EEAD4',
          100: '#E7FBF6',
          200: '#BFF5E9',
          300: '#8EEBD8',
          400: '#5EEAD4',
          500: '#2DD4BF',
          600: '#14B8A6',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Fraunces"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};
