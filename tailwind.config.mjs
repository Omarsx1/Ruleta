/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'fortnite-blue': '#00D4FF',
        'fortnite-purple': '#8B5CF6',
        'fortnite-yellow': '#FFD700',
        'fortnite-orange': '#FF6B35',
        'fortnite-pink': '#FF1493',
        'fortnite-green': '#32CD32',
        'fortnite-dark': '#1a1a2e',
        'fortnite-darker': '#16213e',
      },
      fontFamily: {
        'fortnite': ['Arial Black', 'Arial', 'sans-serif'],
      },
      animation: {
        'spin-wheel': 'spin 3s cubic-bezier(0.23, 1, 0.320, 1) forwards',
        'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}
