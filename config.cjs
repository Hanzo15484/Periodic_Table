/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b1020',
        panel: '#0f1724',
        accent: '#9b6cff',
        glow: '#7ee7ff',
        highlight: '#ffd57e'
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-fast': 'pulseFast 1.6s ease-in-out infinite',
        'neon': 'neon 3s ease-in-out infinite',
        'shine': 'shine 2.2s linear infinite'
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        pulseFast: {
          '0%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.02)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        neon: {
          '0%': { textShadow: '0 0 6px rgba(155,108,255,0.4)' },
          '50%': { textShadow: '0 0 18px rgba(126,231,255,0.45)' },
          '100%': { textShadow: '0 0 6px rgba(155,108,255,0.4)' },
        },
        shine: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        }
      },
      boxShadow: {
        'soft-glow': '0 8px 30px rgba(16,24,40,0.6), inset 0 1px 0 rgba(255,255,255,0.02)',
        'neon-strong': '0 8px 40px rgba(123, 85, 255, 0.16), 0 2px 10px rgba(126,231,255,0.06)'
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: [],
}
