/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#090A15',
        surface: '#111228',
        surfaceHover: '#171936',
        cardBorder: 'rgba(99, 102, 241, 0.18)',
        cardBorderHover: 'rgba(139, 92, 246, 0.45)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
