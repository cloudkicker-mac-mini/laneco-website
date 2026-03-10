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
        black: '#000000',
        charcoal: '#111111',
        darkGray: '#1a1a1a',
        copper: '#D4745B',
        gold: '#C9A86C',
        warmGray: '#A3A3A3',
        white: '#FFFFFF'
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif']
      },
      boxShadow: {
        copper: '0 24px 60px rgba(212, 116, 91, 0.2)'
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at 10% 20%, rgba(201, 168, 108, 0.16), transparent 45%), radial-gradient(circle at 88% 10%, rgba(212, 116, 91, 0.22), transparent 35%), radial-gradient(circle at 50% 90%, rgba(212, 116, 91, 0.14), transparent 42%)'
      }
    }
  },
  plugins: []
};

export default config;
