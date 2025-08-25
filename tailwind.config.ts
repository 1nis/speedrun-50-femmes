
import type { Config } from 'tailwindcss'

export default {
  darkMode: ["class"],
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(214 32% 25%)',
        background: 'hsl(222 47% 11%)',
        foreground: 'hsl(210 40% 98%)',
        primary: {
          DEFAULT: 'hsl(262 83% 58%)',
          foreground: 'white',
        },
        secondary: {
          DEFAULT: 'hsl(242 83% 63%)',
          foreground: 'white',
        },
        muted: 'hsl(215 20% 20%)',
        card: 'hsl(222 47% 13%)'
      },
      borderRadius: {
        '2xl': '1.25rem'
      },
      boxShadow: {
        soft: '0 8px 24px -12px rgba(99,102,241,0.35)'
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 200%' }
        }
      },
      animation: {
        shimmer: 'shimmer 8s ease infinite'
      }
    },
  },
  plugins: [],
} satisfies Config
