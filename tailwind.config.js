/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Design tokens — theme "cyber / reseau" (dark)
        base: '#0A0E14', // fond principal (noir-bleute profond)
        surface: '#121822', // surfaces / cartes
        'surface-2': '#0F141C', // surface alternative
        line: '#1E2A3A', // bordures subtiles
        // Accents neon
        cyan: { DEFAULT: '#22D3EE', soft: 'rgba(34,211,238,0.12)' },
        emerald: { DEFAULT: '#34D399', soft: 'rgba(52,211,153,0.12)' },
        // Texte
        ink: '#E5E7EB', // texte principal
        muted: '#94A3B8', // texte secondaire
        faint: '#5B6677', // texte tres discret
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 0 1px rgba(34,211,238,0.4), 0 8px 30px -8px rgba(34,211,238,0.35)',
        'neon-emerald': '0 0 0 1px rgba(52,211,153,0.4), 0 8px 30px -8px rgba(52,211,153,0.3)',
        card: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 10px 30px -15px rgba(0,0,0,0.7)',
      },
      backgroundImage: {
        'grid-fine':
          'linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)',
      },
      backgroundSize: { grid: '32px 32px' },
      keyframes: {
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        'pulse-soft': { '0%,100%': { opacity: '0.5' }, '50%': { opacity: '1' } },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
