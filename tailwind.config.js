import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export const content = [
  './node_modules/flowbite-react/lib/**/*.js',
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
]
export const theme = {
  screens: {
    'xs': '400px',
    ...defaultTheme.screens,
  },
  extend: {
    maxWidth: {
      '256': '64rem',
    },
    height: {
      '125': '25rem',
      '128': '28rem',
    },
    fontFamily: {
      'cursive': 'var(--font-cursive)',
      'roboto': 'var(--font-roboto)',
      'montserrat': 'var(--font-montserrat)',
    }
  },
}
export const plugins = [
  require("flowbite/plugin"),
  require('tailwindcss-animated')
]
