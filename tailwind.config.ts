import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#11100f',
        panel: '#1b1918',
        text: '#f2efe9',
        accent: '#8f82ff',
        muted: '#b6b0a7'
      },
      boxShadow: {
        luxe: '0 28px 90px rgba(0,0,0,.45)',
        edge: '0 0 0 1px rgba(255,255,255,.08), 0 14px 50px rgba(0,0,0,.35)'
      },
      keyframes: {
        reveal: {
          '0%, 10%': { width: '18%' },
          '52%': { width: '74%' },
          '90%, 100%': { width: '18%' }
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        fade: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        reveal: 'reveal 8s ease-in-out infinite',
        floaty: 'floaty 7s ease-in-out infinite',
        fade: 'fade .9s ease forwards'
      }
    }
  },
  plugins: []
};

export default config;
