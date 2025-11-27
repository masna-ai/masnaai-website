// Tailwind Configuration for Browser Use
tailwind.config = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#C0DFFF',
          300: '#90C7FF',
          400: '#60A9FF',
          500: '#3B82F6', // Main primary color
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        secondary: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6', // Main secondary color
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        ai: {
          dark: '#0B0F19',
          card: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.08)',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
