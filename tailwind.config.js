/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        secondary: '#10B981',
        accent: '#F59E0B',
        dark: {
          bg: '#0F172A',
          card: '#1E293B',
          border: '#334155'
        }
      },
      fontFamily: {
        display: ['Unbounded', 'sans-serif'],
        body: ['Noto Sans SC', 'sans-serif'],
        mono: ['Orbitron', 'monospace']
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}
