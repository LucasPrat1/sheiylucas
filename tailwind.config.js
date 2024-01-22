/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/lib/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      minWidth: {
        '128': '32rem',
        '256': '64rem',
      },
      maxWidth: {
        '128': '32rem',
        '256': '64rem',
      },
      fontFamily: {
        'cursive': 'var(--font-cursive)',
        'roboto': 'var(--font-roboto)'
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
