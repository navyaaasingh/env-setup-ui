/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#111010',
        surface: '#331E1F',
        primary: '#C3463C',
        accent: '#8D312D',
        'subtle-accent': '#C3463C',
        'text-primary': '#F4EEED',
        'text-muted': '#C3A7A6',
        'border-subtle': '#442A2B',
      },
      boxShadow: {
        'heat': '0 4px 24px rgba(141, 49, 45, 0.4)',
        'heat-lg': '0 8px 40px rgba(141, 49, 45, 0.5)',
        'glow-primary': '0 0 20px rgba(195, 70, 60, 0.4)',
        'glow-accent': '0 0 20px rgba(141, 49, 45, 0.4)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(141, 49, 45, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(141, 49, 45, 0.8), 0 0 60px rgba(195, 70, 60, 0.3)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'sphere-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.08)', opacity: '1' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.3s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
        'spin-slow': 'spin-slow 3s linear infinite',
        'sphere-pulse': 'sphere-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      backgroundImage: {
        'button-gradient': 'linear-gradient(45deg, #C3463C, #8D312D)',
        'sphere-gradient': 'radial-gradient(circle at top left, rgba(195, 70, 60, 0.8), rgba(141, 49, 45, 0.9))',
      },
    },
  },
  plugins: [],
}
