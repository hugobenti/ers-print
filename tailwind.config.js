/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        ersPrimary:'#61AEAA',
        // ersPrimaryDark:'#223d3b',
        ersPrimaryDark:'#396866',
        ersPrimaryLight:'#5ab3af',

        ersGold:'#A69071',

        ersBlack1:'#1C1D1F',
        ersBlack2:'#191A1B',
        ersBlack3:'#17181A',
        ersBlack4:'#131314',
        ersBlack5:'#0E0E0F',
        ersBlack6:'#0B0B0C',

        ersBlue1:'#172E48',
        ersBlue2:'#152940',
        ersBlue3:'#14263C',
        ersBlue4:'#101F30',
        ersBlue5:'#0C1724',
        ersBlue6:'#09121C',

        background: '#fdfdfd'
      }
    },
  },
  plugins: [],
}
