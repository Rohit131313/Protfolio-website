/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#60a5fa',
        dark: {
          DEFAULT: '#111827',
          light: '#1f2937',
          lighter: '#374151'
        },
        light: '#e5e7eb'
      },
    },
  },
  plugins: [],
}