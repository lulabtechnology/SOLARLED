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
        ink: '#04091F',
        navy: '#0B1F5D',
        steel: '#6A738B',
        mist: '#E9EEF7',
        ivory: '#F7F9FB',
        ember: '#D7A53A',
        cyan: '#3D63D2'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px rgba(2,8,25,0.42)',
        card: '0 18px 45px rgba(2,8,25,0.12)'
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
