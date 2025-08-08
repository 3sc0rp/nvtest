/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f7f8f4',
          100: '#eef1e8',
          200: '#dde4d1',
          300: '#c5d1b0',
          400: '#a5b884',
          500: '#8a9f6a',
          600: '#5b6f3a',
          700: '#415128',
          800: '#374324',
          900: '#2f3920',
        },
        sand: {
          50: '#fefdf9',
          100: '#fdfaf2',
          200: '#faf4e6',
          300: '#f5ead3',
          400: '#eed9b8',
          500: '#e5d5b5',
          600: '#d4c19a',
          700: '#c0a97c',
          800: '#a08e65',
          900: '#847555',
        },
        brown: {
          50: '#fbf7f4',
          100: '#f6ede7',
          200: '#eed9cf',
          300: '#e3c0b0',
          400: '#d4a08a',
          500: '#c6856a',
          600: '#b66d4f',
          700: '#5a3e2b',
          800: '#3e2a1e',
          900: '#2f1f16',
        },
        terracotta: {
          50: '#fef3f1',
          100: '#fde8e4',
          200: '#fbd4cc',
          300: '#f7b8a8',
          400: '#f1937a',
          500: '#ec6d4c',
          600: '#b5543a',
          700: '#8f3e29',
          800: '#763425',
          900: '#632d20',
        },
        cream: '#fff7e6',
        charcoal: '#2b2b2b',
      },
      fontFamily: {
        'marcellus': ['Marcellus', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'noto-naskh': ['Noto Naskh Arabic', 'serif'],
      },
      backgroundImage: {
        'rug-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23b5543a\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
