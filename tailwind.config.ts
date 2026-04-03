import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b0b0b',
        surface: '#121212',
        accent: '#4cc9ff',
        soft: '#e9eef2'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(76,201,255,.25), 0 30px 80px rgba(76,201,255,.15)',
        panel: '0 30px 100px rgba(0,0,0,.45)'
      },
      backgroundImage: {
        'spotlight': 'radial-gradient(circle at 50% 0%, rgba(76,201,255,.18), transparent 45%)',
        'vignette': 'radial-gradient(circle at 50% 20%, transparent 35%, rgba(0,0,0,.6) 100%)'
      },
      keyframes: {
        'reveal-sweep': {
          '0%, 12%': { width: '14%' },
          '50%': { width: '72%' },
          '88%, 100%': { width: '14%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'reveal-sweep': 'reveal-sweep 7.5s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fade-up .8s ease forwards'
      }
    }
  },
  plugins: []
};

export default config;
