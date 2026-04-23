import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#08111B',
        navy: '#0C1F33',
        steel: '#5B6572',
        mist: '#E9EEF2',
        ivory: '#F7F9FB',
        ember: '#D7A53A',
        cyan: '#5FD2FF'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px rgba(8,17,27,0.35)',
        card: '0 18px 45px rgba(8,17,27,0.10)'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};

export default config;
