/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      breakInside: {
        auto: 'auto',
        avoid: 'avoid',
        'avoid-page': 'avoid-page',
        'avoid-column': 'avoid-column',
      },
      boxShadow: {
        'custom-dark': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}

