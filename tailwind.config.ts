import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#06251F', deep: '#06251F', navy: '#0B1F5D', steel: '#53655F', mist: '#E9F7F5', ivory: '#F6FBF8', ember: '#D7A53A', cyan: '#46C7E8', leaf: '#8DC63F'
      },
      boxShadow: { glow: '0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px rgba(2,8,25,0.32)', card: '0 18px 45px rgba(6,37,31,0.10)' },
      borderRadius: { '4xl': '2rem' },
      backgroundImage: { 'grid-fade': 'linear-gradient(rgba(6,37,31,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6,37,31,0.05) 1px, transparent 1px)' }
    }
  },
  plugins: []
};
export default config;
