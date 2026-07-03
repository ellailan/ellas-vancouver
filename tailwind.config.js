/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F6EFE4',
        'paper-dark': '#EDE3D2',
        ink: '#3A2E2A',
        rose: {
          DEFAULT: '#C97064',
          light: '#E4A79C',
          dark: '#A4483E',
        },
        pine: {
          DEFAULT: '#3F5D4E',
          light: '#6E8E7C',
          dark: '#2A4136',
        },
        mustard: {
          DEFAULT: '#E0A458',
          light: '#F0C68A',
          dark: '#C1863C',
        },
        sky: {
          DEFAULT: '#7FA8B8',
          light: '#AFC9D3',
        },
      },
      fontFamily: {
        hand: ['"Caveat"', 'cursive'],
        display: ['"Fraunces"', 'serif'],
        body: ['"Nunito"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        stamp: '0 6px 16px -4px rgba(58, 46, 42, 0.25)',
        card: '0 10px 30px -8px rgba(58, 46, 42, 0.22)',
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'pop-in': {
          '0%': { transform: 'scale(0.85) translateY(6px)', opacity: '0' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
        },
        'wobble': {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        'float-in': {
          '0%': { transform: 'translateX(-16px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'pop-in': 'pop-in 0.25s ease-out',
        wobble: 'wobble 3.2s ease-in-out infinite',
        'float-in': 'float-in 0.4s ease-out',
      },
    },
  },
  plugins: [],
}
