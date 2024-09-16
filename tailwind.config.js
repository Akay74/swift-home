/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('../assets/hero.png')",
        "hero2": "url('../assets/hero2.jpg)",
      },
      fontFamily: {
        sans: ['var(--font-lato)'],
      },
    },
  },
  plugins: [],
};
