/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "nav-bg-color": "var(--nav-bg-color)",
        "nav-text-color": "var(--nav-text-color)",
        "nav-bg-highlight": "var(--nav-bg-highlight)",
        "nav-icon-color": "var(--nav-icon-color)",
        "nav-bg-border": "var(--nav-bg-border)",  
        "nav-prof-text": "var(--nav-prof-text)",  
        
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  prefix: '',
}
