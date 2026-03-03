/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
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
        border: '#2D2626',
      },
      boxShadow: {
        'heat-shadow': '0 8px 32px rgba(153, 27, 27, 0.4)',
        'heat-glow': '0 0 20px rgba(220, 38, 38, 0.5)',
        'primary-glow': '0 0 20px rgba(245, 158, 11, 0.5)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'breathe': 'breathe 3s ease-in-out infinite',
        'step-pulse': 'pulse-glow 1.5s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(245, 158, 11, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(245, 158, 11, 0.8), 0 0 60px rgba(220, 38, 38, 0.4)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'breathe': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(220, 38, 38, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(220, 38, 38, 0.35)' },
        },
      },
    },
  },
  plugins: [],
};
