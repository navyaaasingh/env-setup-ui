/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A101C',
        surface: '#161B22',
        primary: '#00F5FF',
        accent: '#A000FF',
        'subtle-accent': '#C0C0C0',
        'text-primary': '#F0F8FF',
        'text-muted': '#A1A1AA',
        'border-subtle': '#2D2626',
      },
      boxShadow: {
        'heat': '0 4px 24px rgba(16, 27, 45, 0.4)',
        'heat-lg': '0 8px 40px rgba(16, 27, 45, 0.5)',
        'glow-primary': '0 0 20px rgba(0, 245, 255, 0.4)',
        'glow-accent': '0 0 20px rgba(160, 0, 255, 0.4)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 245, 255, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 245, 255, 0.8), 0 0 60px rgba(160, 0, 255, 0.3)' },
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
        'button-gradient': 'linear-gradient(45deg, #00F5FF, #2066E6)',
        'sphere-gradient': 'radial-gradient(circle at top left, rgba(0, 245, 255, 0.8), rgba(100, 0, 250, 0.9))',
      },
    },
  },
  plugins: [],
}
