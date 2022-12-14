/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': "#0072FF",
        'secondary-color': "#606467",
        'primary-pale': '#38bdf8',
        'white-neutral': "#fafafa",
        'dark-grey': '#141319',
        'border-color': '#dfe1e5',
        'box-shadow': '0 1px 6px 0 rgb(32 33 36 / 28%)',
        'overlay-color': 'rgba(0,0,0,0.3)',
        'secondary-pale': '#E0E0E0',
        'background-color': '#EFF6FF',
  
        'dark-background-color': '#141319',
        'dark-highlight-color': '#27262B',
        'dark-drawer-color': '#191921',
        'dark-hr-line': '#f1f1f1',
        'dark-overlay-color': 'rgba(0,0,0,0.6)'
      },
      fontFamily: {
        'roboto': ['Roboto Slab', 'serif']
      },
    }
  },
  plugins: [],
}