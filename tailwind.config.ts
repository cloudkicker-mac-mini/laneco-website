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
        obsidian: '#000000',
        charcoal: '#111111',
        copper: '#D4745B',
        gold: '#C9A86C',
        'warm-gray': '#A3A3A3',
        glass: 'rgba(255,255,255,0.05)'
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace']
      },
      boxShadow: {
        copper: '0 20px 40px rgba(212, 116, 91, 0.15)'
      }
    }
  },
  plugins: []
};

export default config;
