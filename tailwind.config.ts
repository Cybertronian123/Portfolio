import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',
        primary: '#38bdf8',
        accent: '#22c55e',
        text: '#e5e7eb',
        muted: '#94a3b8',
        card: '#111c34'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(56, 189, 248, 0.25), 0 12px 30px rgba(2, 132, 199, 0.2)'
      },
      backgroundImage: {
        'mesh-gradient':
          'radial-gradient(at 27% 37%, rgba(56,189,248,0.15) 0px, transparent 50%), radial-gradient(at 97% 21%, rgba(34,197,94,0.12) 0px, transparent 50%), radial-gradient(at 52% 99%, rgba(14,116,144,0.2) 0px, transparent 50%)'
      }
    }
  },
  plugins: []
};

export default config;
