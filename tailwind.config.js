/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F0A0A',
        surface: '#1C1616',
        primary: '#F59E0B',
        accent: '#DC2626',
        'subtle-accent': '#FDE047',
        'text-primary': '#FAFAF9',
        'text-muted': '#71717A',
        'border-subtle': '#2D2626',
      },
      boxShadow: {
        'heat': '0 4px 24px rgba(153, 27, 27, 0.4)',
        'heat-lg': '0 8px 40px rgba(153, 27, 27, 0.5)',
        'glow-primary': '0 0 20px rgba(245, 158, 11, 0.4)',
        'glow-accent': '0 0 20px rgba(220, 38, 38, 0.4)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(220, 38, 38, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(220, 38, 38, 0.8), 0 0 60px rgba(245, 158, 11, 0.3)' },
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
        'button-gradient': 'linear-gradient(45deg, #F59E0B, #EA580C)',
        'sphere-gradient': 'radial-gradient(circle at top left, rgba(253, 224, 71, 0.8), rgba(185, 28, 28, 0.9))',
      },
    },
  },
  plugins: [],
}
