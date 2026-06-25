/** @type {import('tailwindcss').Config} */
// Tokens from the approved Website Design System (docs vault → 06 - Delivery).
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Terracotta — brand ramp (shared with the app theme).
        terra: {
          50: '#fff1ea', 100: '#f8ddd1', 200: '#eeb89f', 300: '#e4926d', 400: '#dc7243',
          500: '#d75e2a', 600: '#d9552c', 700: '#c14a22', 800: '#a83f1c', 900: '#8a3214',
        },
        // Warm neutrals — replace pure gray/white.
        sand: { DEFAULT: '#f4ece3', cream: '#faf6f1', 200: '#e7ddd2', 300: '#d4c8ba' },
        ink: { DEFAULT: '#1c1a17', muted: '#5c544c', soft: '#8a8076' },
        // Pine — earthy secondary.
        pine: { 50: '#e9f2f0', 100: '#d7ebe6', 500: '#1b5a52', 700: '#114039', 900: '#0f3d3a' },
        warning: '#e8a33d',
        error: '#c0392b',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'Inter', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(48px,8vw,80px)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        display: ['clamp(40px,5vw,60px)', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
        h1: ['clamp(32px,4vw,44px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h2: ['clamp(26px,3vw,34px)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        h3: ['clamp(20px,2vw,24px)', { lineHeight: '1.25' }],
        lead: ['clamp(18px,2vw,22px)', { lineHeight: '1.55' }],
        eyebrow: ['13px', { lineHeight: '1', letterSpacing: '0.12em' }],
      },
      maxWidth: { site: '1120px', content: '680px' },
      borderRadius: { btn: '12px', card: '20px' },
      boxShadow: {
        sm: '0 1px 2px rgba(28,26,23,.06)',
        md: '0 10px 30px -12px rgba(28,26,23,.18)',
        lg: '0 30px 60px -20px rgba(28,26,23,.25)',
      },
      transitionTimingFunction: { soft: 'cubic-bezier(.22,1,.36,1)' },
    },
  },
  plugins: [],
};
