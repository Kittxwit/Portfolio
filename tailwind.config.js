export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ivory: '#F2E9DC',
        terracotta: '#C08552',
        chocolate: '#5D3023',
        copper: '#895737',
        blush: '#D9B49D',
      },
      fontFamily: {
        sans: ['Mitr', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
